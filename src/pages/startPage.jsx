import { useState,  } from "react";
import { useNavigate} from 'react-router-dom'

export const StartPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    const login = () => {
        if(name === "" || email === ""){
            alert("Please fill in your name and email")
        } else {
            navigate("/home")
        }
    }
    return (
        <div className="flex flex-col justify-center h-screen items-center">
            <div className="flex flex-col w-96 gap-5">
                <div className="flex flex-col gap-3 self-start pb-5">
                    <h1 className="text-4xl font-bold">Welcome to Quiz App</h1>
                    <p className="text-sm">Please fill in your name and email to start the quiz</p>
                </div>
                <div className="py-3 px-4 bg-white flex flex-col gap-3 rounded-lg">
                    <label className="text-sm">Name</label>
                    <input className="focus:outline-none placeholder:text-sm" placeholder="Input your name here" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="py-3 px-4 bg-white flex flex-col gap-3 rounded-lg">
                    <label className="text-sm">Email</label>
                    <input className="focus:outline-none placeholder:text-sm" placeholder="Input your email here" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <button className="bg-lime-400 py-3 rounded-full text-white font-bold " onClick={login}>Login</button>
            </div>
        </div>
    )
}