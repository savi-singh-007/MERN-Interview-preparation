import { useState } from "react"

const outputNumber = () => {
    return Math.floor(Math.random() * 100 + 1)
}
const GuessNumber = () => {
    const [correctNumber, setCorrectNumber] = useState(outputNumber());
    const [inputNum, setInputNum] = useState<number | undefined>();
    const [result, setResult] = useState("")
    const [attempts, setAttempts] = useState(0)

    const checkNumber = () => {

        if(!inputNum) {
            return
        }

        if(inputNum > 100 || inputNum < 0) {
            alert("Please enter a number between 0 and 100")
            return
        }
        
        setAttempts((prev) => prev += 1)
        if (correctNumber === inputNum) {
            setResult(`Correct ${correctNumber}`)
            return
        }

        if (correctNumber < inputNum ) {
            setResult("Too High")
            return
        }

        if (correctNumber >inputNum ) {
            setResult("Too Low")
            return
        }
        
    }

    const resetGame = () => {
        setCorrectNumber(outputNumber())
        setInputNum(0)
        setResult("")
        setAttempts(0)
    }
    console.log(correctNumber)



    return <div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem", padding: "2rem" }}>
            <h1>Guess the Number</h1>
            <h3>Attemps: {attempts}</h3>
            <input value={inputNum} onChange={(e) => {
                setInputNum(Number(e.target.value))
            }} style={{ height: "20px", width: "300px" }} type="number" placeholder="enter your number" />
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", padding: "1rem" }}>
            <button onClick={checkNumber}>Guess Number</button>
            <button onClick={resetGame}>Reset Game</button>
        </div>
        <h3>{result || ""}</h3>
    </div>
}

export default GuessNumber