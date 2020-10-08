import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/authentication/authContext";

const Login = (props) => {
  //CONTEXT
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { authenticated, message, LogInUser } = authContext;

  //USE_EFFECT
  //In case where the password or the user dosn't exist
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
  /*iniciar sesion*/
  const [usuario, handleUsuario] = useState({
    email: "",
    password: "",
  });

  //VARIABLES
  const { email, password } = usuario;

  //FUNCTIONS
  const handleOnCahnge = (e) => {
    handleUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    //Validaciones
    if (email.trim() === "" || password.trim() === "") {
      showAlert("All fields are required", "alerta-error");
    }

    //Pasarlo al action
    LogInUser({ email, password });
  };

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>MERNTask</h1>
        <form onSubmit={handleSubmitForm}>
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
            <input
              type="submit"
              value="Log In"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"/signup"} className="enlace-cuenta">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
