import React, { useContext, useEffect } from "react";
//Context
import proyectoContext from "../../context/proyectos/proyectoContext";
import AlertContext from "../../context/alert/alertContext";
//componenets
import Proyecto from "./Proyecto";
//Libraries
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoProyectos = () => {
  //USE_CONTEXT
  const proyectosContext = useContext(proyectoContext);
  const { projects, message, getProjects } = proyectosContext;

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  //USE_EFFECT
  useEffect(() => {
    //In error case
    if (message) {
      showAlert(message.msg, message.category);
    }

    getProjects();
  }, [message]);

  //Revisando si proyectos tiene contenido
  if (projects.length === 0)
    return <p>There are no projects, start by creating one</p>;

  if (projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <TransitionGroup>
        {projects.map((pro) => (
          <CSSTransition key={pro._id} timeout={350} classNames="proyecto">
            <Proyecto project={pro} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
