import React, { useState } from "react";
import Message from "./Message";
import "./styles.css";

const FormWithCustomHook = () => {
  const [form, setForm] = useState({
    nombre: "",
    password: "",
    email: "",
  });
  const { nombre, password, email } = form;

  const handleInputChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
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
    </>
  );
};

export default FormWithCustomHook;
