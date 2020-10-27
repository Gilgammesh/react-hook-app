import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";
import "./styles.css";

const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <hr />
      <h3>Counter: {counter}</h3>

      <p>{memoProcesoPesado}</p>

      <button
        className="btn btn-info"
        onClick={() => {
          increment();
        }}
      >
        Incrementar +1
      </button>
      <button
        className="btn btn-warning ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
