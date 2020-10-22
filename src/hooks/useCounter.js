import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [state, setState] = useState(initialValue);

  const increment = (factor = 1) => {
    setState(state + factor);
  };

  const decrement = (factor = 1) => {
    setState(state - factor);
  };

  const reset = () => {
    setState(initialValue);
  };

  return {
    counter: state,
    increment,
    decrement,
    reset,
  };
};
