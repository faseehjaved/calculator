import { useState } from "react";

export const Calculator = () => {
  const[display,setDisplay] = useState("");
  let appendDisplay=val=>{
    setDisplay(display+val);
  }
  let clearDisplay=()=>{
    setDisplay("");
  }
  return (
    <div className="">
      <div className="display">{display}</div>      
      <div className="row">
        <div className="cal-btn" onClick={()=>appendDisplay("7")}>7</div>
        <div className="cal-btn" onClick={()=>appendDisplay("8")}>8</div>
        <div className="cal-btn" onClick={()=>appendDisplay("9")}>9</div>
        <div className="cal-btn bg-orange" onClick={()=>appendDisplay("x")}>x</div>
      </div>
      <div className="row">
        <div className="cal-btn" onClick={()=>appendDisplay("4")}>4</div>
        <div className="cal-btn" onClick={()=>appendDisplay("5")}>5</div>
        <div className="cal-btn" onClick={()=>appendDisplay("6")}>6</div>
        <div className="cal-btn bg-orange" onClick={()=>appendDisplay("-")}>-</div>
      </div>
      <div className="row">
        <div className="cal-btn" onClick={()=>appendDisplay("1")}>1</div>
        <div className="cal-btn" onClick={()=>appendDisplay("2")}>2</div>
        <div className="cal-btn" onClick={()=>appendDisplay("3")}>3</div>
        <div className="cal-btn bg-orange" onClick={()=>appendDisplay("+")}>+</div>
      </div>
      <div className="row">
        <div className="cal-btn" onClick={()=>appendDisplay("0")}>0</div>
        <div className="cal-btn" onClick={()=>appendDisplay(".")}>.</div>
        <div className="cal-btn" onClick={()=>appendDisplay("=")}>=</div>
        <div className="cal-btn bg-orange" onClick={()=>appendDisplay("/")}>/</div>
      </div>

      <div className="clear-btn" onClick={()=>clearDisplay()}>Clear</div>
    </div>
  );
};
