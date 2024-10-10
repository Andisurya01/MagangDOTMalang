import axios from "axios"

export const getSoal = async ({ammount}) => {
    try {
        const soal = await axios.get(`https://opentdb.com/api.php?amount=${ammount}&type=multiple`);
        return soal;
    } catch (error) {
        return error;
    }
}