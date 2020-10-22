import React, { useState, useEffect } from "react";
import "./styles.css";

const SimpleForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
  });
  const { nombre, email } = form;

  useEffect(() => {
    console.log("Inicio");
  }, []);

  useEffect(() => {
    console.log("se cambio el form");
  }, [form]);

  useEffect(() => {
    console.log("se cambio el email del form");
  }, [email]);

  const handleInputChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Use Effect</h1>
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

export default SimpleForm;
