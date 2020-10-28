import React, { memo } from "react";

const ShowIncrement = memo(({ increment }) => {
  console.log("me volvi a generar :( ");

  return (
    <button className="btn btn-info" onClick={() => increment(5)}>
      Incrementar +1
    </button>
  );
});

export default ShowIncrement;
