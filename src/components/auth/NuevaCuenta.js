import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
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

    //Validaciones

    //Pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una Cuenta</h1>
        <form onSubmit={handleSubmitForm}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={nombre}
              placeholder="Tu nombre"
              onChange={handleOnCahnge}
            />
          </div>
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
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              name="confirmar"
              value={confirmar}
              placeholder="Repite tu Password"
              onChange={handleOnCahnge}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Registrarme"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Iniciar Sesion
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
