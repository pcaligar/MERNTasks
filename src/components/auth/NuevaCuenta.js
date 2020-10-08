import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/authentication/authContext";

const NuevaCuenta = (props) => {
  //CONTEXT
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { authenticated, message, registerUser } = authContext;

  //USE_EFFECT
  //Waching if the user was registered, authenticated or we have a duplicate registry
  useEffect(() => {
    console.log(message);
    if (authenticated) {
      props.history.push("/projects");
    }

    if (message) {
      showAlert(message.msg, message.category);
    }
  }, [message, authenticated, props.history]); //We have access to  props.history because we are using react touter dom

  //STATES
  const [usuario, handleUsuario] = useState({
    name: "",
    email: "",
    password: "",
    confirmation: "",
  });

  //VARIABLES
  const { name, email, password, confirmation } = usuario;

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
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmation.trim() === ""
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

    if (password !== confirmation) {
      showAlert("The password and confirmation are not equal", "alerta-error");
      return;
    }

    //Pasarlo al action
    registerUser({
      name,
      email,
      password,
    });
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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
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
            <label htmlFor="confirmation">Confirm Password</label>
            <input
              type="password"
              name="confirmation"
              value={confirmation}
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
          Log In
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
