import React, { Fragment, useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //CONTEXT
  //Obterner el state de formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorFormulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  //STATES
  const [proyecto, handleProyecto] = useState({
    nombre: "",
  });

  //FUNCTIONS
  const handleOnChange = (e) => {
    handleProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClick = () => {
    mostrarFormulario();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //Validaciones
    if (nombre === "") {
      mostrarError();
      return;
    }

    //Agregar al state
    agregarProyecto(proyecto);

    //Reiniciar Form
    handleProyecto({ nombre: "" });
  };

  //VARIABLES
  const { nombre } = proyecto;

  return (
    <Fragment>
      <button
        type="button"
        onClick={handleOnClick}
        className="btn btn-block btn-primario"
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={handleOnSubmit}>
          <div>
            <input
              type="text"
              name="nombre"
              value={nombre}
              placeholder="Nombre Proyecto"
              onChange={handleOnChange}
              className="input-text"
            />
            <input
              type="submit"
              value="Agregar Proyecto"
              className="btn btn-block btn-primario"
            />
          </div>
        </form>
      ) : null}

      {errorFormulario ? (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
