import { useState } from "react"
const ProgressBar = () => {
    const [progress, setProgress] = useState(10);

    const getBackgroundColor = (progress : number) => {
       if(progress >= 80) return "green"
       if(progress >= 40 ) return "yellow"
       return "red"
    }

    const updateProgessBar = (value : number) => {
        setProgress((prev) => {
            return Math.max(0, Math.min(100, prev + value))
        })
    }

    return <div style={{padding : "1rem"}}>
        <div>
            <h1 style={{textAlign : "center"}}>Progress Bar</h1>
            <div style={{
                height : "20px",
                background : "#808080",
                borderRadius : "1rem",
                position : "relative"
            }}>

              <div style={{
                height : "100%",
                width : `${progress}%`,
                background : getBackgroundColor(progress),
                borderRadius : "1rem",
                transition : "width 0.3s ease-in-out"
              }}>
                <span style={{color : "white", position : "absolute", top :0, left : "50%" }}>
                      {progress}%  
                </span>
              </div>

              <div style={{display : "flex", justifyContent : "center", alignItems : "center", gap : "1rem", padding : "1rem"}}>  
              <button onClick={() => updateProgessBar(-10)}>-10%</button>
              <button onClick={() => updateProgessBar(10)}>+10%</button>
              </div>
            </div>
        </div>

    </div>

}

export default ProgressBar