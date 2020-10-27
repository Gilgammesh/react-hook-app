import { exitCode } from "process";
import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./styles.css";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    nombre: "",
    password: "",
    email: "",
  });
  const { nombre, password, email } = formValues;

  useEffect(() => {
    console.log("email de custom hook cambios");
  }, [email]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="nombre"
          className="form-control"
          placeholder="Ingrese nombre"
          autoComplete="off"
          value={nombre}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Ingrese contraseña"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Ingrese correo electrónico"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
