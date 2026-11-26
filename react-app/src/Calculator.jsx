import React, { useState } from "react";
import "./CalculatorStyle.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Enter First Number"
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Second Number"
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />
      <br />

      <button onClick={() => setResult(Number(num1) + Number(num2))}>+</button>

      <button onClick={() => setResult(Number(num1) - Number(num2))}>-</button>

      <button onClick={() => setResult(Number(num1) * Number(num2))}>*</button>

      <button onClick={() => setResult(Number(num1) / Number(num2))}>/</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;
