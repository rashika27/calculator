
import './App.css';
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setOutput(eval(input).toString());
    } catch (error) {
      setOutput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="calculator">
      <h1> React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{output}</div>

      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>

        <div className="row">
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>

        <div className="row">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
        </div>

        <div className="row">
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
