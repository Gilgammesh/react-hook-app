import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./styles.css";

const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote_id, quote, author } = !!data && data[0];

  const divTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(divTag.current.getBoundingClientRect());
  }, [data]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <div ref={divTag} className="blockquote text-right">
        <h4>{quote_id}</h4>
        <p className="mb-0">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </div>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-success" onClick={() => increment(1)}>
        Siguiente quote
      </button>
    </div>
  );
};

export default LayoutEffect;
