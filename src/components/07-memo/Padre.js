import React, { useCallback, useState } from "react";
import Hijo from "./Hijo";
import "./styles.css";

const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [cadena, setCadena] = useState("0");
  const [valor, setValor] = useState(0);

  const operacion = useCallback(
    (num) => {
      setCadena((value) => `${value} + ${num}`);
    },
    [setCadena]
  );

  const incrementar = useCallback(
    (num) => {
      setValor((value) => value + num);
    },
    [setValor]
  );

  return (
    <div>
      <h1>Padre</h1>
      <hr />
      <label>Operación:</label>
      <p> = {cadena}</p>
      <h4> Total = {valor} </h4>
      <hr />

      {numeros.map((ele, index) => (
        <Hijo
          key={ele}
          numero={ele}
          operacion={operacion}
          incrementar={incrementar}
        />
      ))}
    </div>
  );
};

export default Padre;
