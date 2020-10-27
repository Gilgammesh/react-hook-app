import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./styles.css";

const MultiplesCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, loading, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote_id, quote, author } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad Quote</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading ...</div>
      ) : (
        <div className="blockquote text-right">
          <h4>{quote_id}</h4>
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </div>
      )}

      <button className="btn btn-success" onClick={() => increment(1)}>
        Siguiente quote
      </button>
    </div>
  );
};

export default MultiplesCustomHooks;
