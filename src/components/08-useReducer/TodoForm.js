import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";

const TodoForm = ({ dispatch }) => {
  const initialForm = {
    id: "",
    desc: "",
    done: false,
  };
  const [formValues, handleInputChange, resetForm] = useForm(initialForm);
  const { desc, done } = formValues;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!desc.trim().length) {
      return;
    }
    dispatch({
      type: "add",
      payload: { ...formValues, id: new Date().getTime() },
    });
    resetForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Crear nueva tarea</h3>
      <div className="form-group">
        <label htmlFor="descripcion">Descripcion: </label>
        <input
          name="desc"
          type="text"
          className="form-control"
          id="descripcion"
          value={desc}
          placeholder="Ingrese descripcion de tarea"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-check">
        <input
          name="done"
          type="checkbox"
          className="form-check-input"
          id="done"
          checked={done}
          onChange={handleInputChange}
        />
        <label className="form-check-label" htmlFor="done">
          Realizado
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Añadir
      </button>
    </form>
  );
};

TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default TodoForm;
