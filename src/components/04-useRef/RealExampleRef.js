import React, { useState } from "react";
import MultiplesCustomHooks from "../03-examples/MultiplesCustomHooks";
import "./styles.css";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr />
      {show && <MultiplesCustomHooks />}

      <button
        className="btn btn-info mt-4"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};

export default RealExampleRef;
