import React, { useEffect, useState } from "react";

const Message = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });
  const { x, y } = coords;
  useEffect(() => {
    const mouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      //   cleanup;
      //   console.log("componente desmontado");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Coordenadas</h3>
      <p>x : {x}</p>
      <p>y : {y}</p>
    </div>
  );
};

export default Message;
