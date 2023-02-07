import React from "react";

import { useState } from "react";
import "./App.css";


export default function App() {
 let [value, setValue] = useState(0);

 const handleIncrement = () => {
    setValue(value + 1);
 };

 const handleDecrement = () => {
   setValue(value - 1);
 };

 const handleReset = () => {
  setValue(0);
 };
 
  return(

  <div className="App">
    <h3>Counter Application</h3>
    <h1>{value}</h1>
    <button onClick={handleIncrement}>+ </button>
    <button onClick={handleReset}>Reset </button>
    <button onClick={handleDecrement}>- </button>

  </div>
  )
};

