import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import NavBar from "./NavBar";
import UserContext from "./UserContext";

const LoginScreen = () => {
  const history = useHistory();

  const initialForm = {
    id: "",
    name: "",
    email: "",
    password: "",
  };
  const [formValues, handleInputChange, resetForm] = useForm(initialForm);
  const { name, email, password } = formValues;

  const { setUser } = useContext(UserContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setUser({ ...formValues, id: Math.floor(Math.random() * 100) });
    resetForm(initialForm);
    history.push("/home");
  };

  return (
    <>
      <NavBar />
      <div className="m-4">
        <h1>LoginScreen</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
