import { useEffect, useState } from "react"
import { getSoal } from "../api/soal"

export const HomePage = () => {
    const [soal, setSoal] = useState([]);

    useEffect(() => {
        getSoal({ammount : 1}).then(data => {
            console.log(data.data.results[0]);
            
            setSoal(data);
        })
    }, [])
    return (
        <div>
            <div className="flex flex-col">
                <p>Email</p>
                <h1>Name</h1>
                <div>
                </div>
                <button onClick={()=>{console.log(soal)}}>tes</button>
            </div>
        </div>
    )
}