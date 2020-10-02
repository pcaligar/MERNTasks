import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";

const NuevaCuenta = () => {
  //CONTEXT
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  //STATES
  /*iniciar sesion*/
  const [usuario, handleUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  //VARIABLES
  const { nombre, email, password, confirmar } = usuario;

  //FUNCTIONS
  const handleOnCahnge = (e) => {
    handleUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    //Validations
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      showAlert("All fields are required", "alerta-error");
      return;
    }

    if (password.length < 6) {
      showAlert(
        "The password must be at least of 6 characters",
        "alerta-error"
      );
      return;
    }

    if (password !== confirmar) {
      showAlert("The password and confirmation are not equal", "alerta-error");
      return;
    }

    //Pasarlo al action
  };

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Get an account</h1>
        <form onSubmit={handleSubmitForm}>
          <div className="campo-form">
            <label htmlFor="nombre">Name</label>
            <input
              type="text"
              name="nombre"
              value={nombre}
              placeholder="your name"
              onChange={handleOnCahnge}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="your email"
              onChange={handleOnCahnge}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="your Password"
              onChange={handleOnCahnge}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirm Password</label>
            <input
              type="password"
              name="confirmar"
              value={confirmar}
              placeholder="Repeat your Password"
              onChange={handleOnCahnge}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
