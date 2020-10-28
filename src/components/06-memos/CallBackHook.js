import React, { useState, useCallback, useEffect } from "react";
import ShowIncrement from "./ShowIncrement";
import "./styles.css";

const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (rate) => {
      setCounter((count) => count + rate);
    },
    [setCounter]
  );

  useEffect(() => {
    // Cada vez que cambia la funcion se renderizaria nuevamente
  }, [increment])

  return (
    <div>
      <h1>Use CallBack Hook</h1>
      <hr />

      <h2>Counter {counter} </h2>

      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallBackHook;
