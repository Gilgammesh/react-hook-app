import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./styles.css";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  const factor = 2;

  return (
    <>
      <h1>Counter with custom hook: {counter}</h1>
      <hr />

      <button className="btn btn-danger" onClick={() => decrement(factor)}>
        -{factor}
      </button>
      <button className="btn btn-secondary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => increment(factor)}>
        +{factor}
      </button>
    </>
  );
};

export default CounterWithCustomHook;
