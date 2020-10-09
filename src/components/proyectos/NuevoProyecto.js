import React, { Fragment, useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //CONTEXT
  const proyectosContext = useContext(proyectoContext);
  const { form, errorForm, showForm, addProject, showError } = proyectosContext;

  //STATES
  const [project, handleProyecto] = useState({
    name: "",
  });

  //FUNCTIONS
  const handleOnChange = (e) => {
    handleProyecto({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClick = () => {
    showForm();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //Validaciones
    if (name === "") {
      showError();
      return;
    }

    //Agregar al state
    addProject(project);

    //Reiniciar Form
    handleProyecto({ name: "" });
  };

  //VARIABLES
  const { name } = project;

  return (
    <Fragment>
      <button
        type="button"
        onClick={handleOnClick}
        className="btn btn-block btn-primario"
      >
        New Project
      </button>
      {form ? (
        <form className="formulario-nuevo-proyecto" onSubmit={handleOnSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="project name"
              onChange={handleOnChange}
              className="input-text"
            />
            <input
              type="submit"
              value="Add Project"
              className="btn btn-block btn-primario"
            />
          </div>
        </form>
      ) : null}

      {errorForm ? (
        <p className="mensaje error">The name of the project is required</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
