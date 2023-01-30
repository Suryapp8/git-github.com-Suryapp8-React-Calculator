import './App.css';
import React, {useState} from "react"




function App() {

  const [calc, setCalc] = useState("")
  const operands = ["/", "*", "+", "-", "."]

  const updatedValue = (value)=>{
    if((operands.includes(value) && calc === "") || 
    (operands.includes(value) && operands.includes(calc.slice(-1)))){
       return 
    }
    setCalc(calc + value)
  }
const calculate=()=>{
  setCalc(eval(calc).toString())
}

const allClear=()=>{
  setCalc("")
}

const clearLast = ()=>{
   if(setCalc === ""){
    return
   }
   const value = calc.slice(0,-1)
   return setCalc(value)
}

  return (
    <div className="container">
      <div className="display">{calc || "0"}</div>
      <div className="btn-container">
        <table >
          <tr className="table">
            <td onClick={allClear} className="special-btn border">AC</td>
            <td onClick={()=> updatedValue("%")} className="special-btn border"> %</td>
            <td onClick={clearLast} className="special-btn border">C</td>
            <td onClick={()=> updatedValue("/")} className="special-btn border">/</td>
          </tr>
          <tr className="table">
            <td onClick={()=> updatedValue("7")}>7</td>
            <td onClick={()=> updatedValue("8")}>8</td>
            <td onClick={()=> updatedValue("9")}> 9</td>
            <td onClick={()=> updatedValue("*")} className="special-btn border">*</td>
          </tr>
          <tr className="table">
            <td onClick={()=> updatedValue("4")}> 4</td>
            <td onClick={()=> updatedValue("5")}>5</td>
            <td onClick={()=> updatedValue("6")}>6</td>
            <td onClick={()=> updatedValue("-")} className="special-btn border">-</td>
          </tr>
          <tr className="table">
            <td onClick={()=> updatedValue("1")}>1</td>
            <td onClick={()=> updatedValue("2")}>2</td>
            <td onClick={()=> updatedValue("3")}>3</td>
            <td className="special-btn border" onClick={()=> updatedValue("+")}>+</td>
          </tr>
          <tr className="table">
            <td onClick={()=> updatedValue(".")}>.</td>
            <td onClick={()=> updatedValue("0")}>0</td>
            <td onClick={()=> updatedValue("Surya")}></td>
            <td onClick={calculate} className="special-btn border equals">=</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
