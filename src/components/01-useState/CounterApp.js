import React, { useState } from "react";
import "./styles.css";

const CounterApp = () => {
  const [state, setState] = useState({
    count1: 10,
    count2: 20,
    count3: 30,
    count4: 40,
  });
  const { count1, count2 } = state;

  const handleClick = (evt) => {
    setState({
      ...state,
      count1: count1 + 1,
    });
  };

  return (
    <>
      <h1>Counter1 = {count1}</h1>
      <h1>Counter2 = {count2}</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        +1
      </button>
    </>
  );
};

export default CounterApp;
