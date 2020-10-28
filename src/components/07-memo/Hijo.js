import React, { memo } from "react";

const Hijo = memo(({ numero, operacion, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  const handleClick = async () => {
    await incrementar(numero);
    await operacion(numero);
  };

  return (
    <button className="btn btn-primary mr-3" onClick={handleClick}>
      +{numero}
    </button>
  );
});

export default Hijo;
