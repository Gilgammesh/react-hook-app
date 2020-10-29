import React from "react";
import PropTypes from "prop-types";

const Todo = ({ ele, index, dispatch }) => {
  return (
    <div className="col-sm-6 mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">ID - {ele.id}</h5>
          <p className="card-text">
            {index + 1}.- {ele.desc}
          </p>
          <p className="card-text">
            {ele.done ? (
              <span className="badge badge-success">Hecho</span>
            ) : (
              <span className="badge badge-warning">Pendiente</span>
            )}
          </p>
          <button
            className="btn btn-danger"
            onClick={() => dispatch({ type: "delete", payload: ele.id })}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

Todo.propTypes = {
  ele: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Todo;
