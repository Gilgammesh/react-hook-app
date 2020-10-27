import React, { useRef } from "react";
import "./styles.css";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={inputRef} className="form-control" placeholder="mi nombre" />

      <button className="btn btn-primary mt-4" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
