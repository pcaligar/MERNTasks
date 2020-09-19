import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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

    //Pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesion</h1>
        <form onSubmit={handleSubmitForm}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Tu email"
              onChange={handleOnCahnge}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Tu Password"
              onChange={handleOnCahnge}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Iniciar Sesion"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
