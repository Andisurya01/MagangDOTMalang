import { useCallback, useEffect, useState } from "react";
import { getSoal } from "../api/soal";

export const Card = () => {
    const [allAnswers, setAllAnswers] = useState([]);
    const [number, setNumber] = useState(0);
    const [question, setQuestion] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState("");

    const everyQuestion = useCallback(async () => {
        try {
            const data = await getSoal(number);
            const questionData = data.data.results[number];
            setCorrectAnswer(questionData.correct_answer);

            // Gabungkan jawaban benar dan salah
            const combinedAnswers = [
                ...questionData.incorrect_answers,
                questionData.correct_answer,
            ];

            // Acak jawaban
            const shuffledAnswers = combinedAnswers.sort(() => Math.random() - 0.5);

            setQuestion(questionData.question);
            setAllAnswers(shuffledAnswers);
        } catch (error) {
            console.log(error);
        }
    }, [number]);

    const checkAnswer = () => {
        if (answer === correctAnswer) {
            setScore((prev) => prev + 1);
        }
    }

    useEffect(() => {
        everyQuestion();
    }, [everyQuestion]);

    return (
        <div>
            <div>
                <h1>{question}</h1>
            </div>
            <div>
                <h2>Score: {score}</h2>
            </div>
            <div>
                {correctAnswer}
            </div>
            <div>{answer}</div>
            <div>
                {allAnswers.map((answer, index) => (
                    <button key={index} onClick={()=> setAnswer(answer)}>{answer}</button>
                ))}
            </div>
            <button
                onClick={() => {
                    setNumber((prev) => prev + 1);
                    console.log(number);
                    checkAnswer();
                }}
            >
                Next
            </button>
        </div>
    );
};
