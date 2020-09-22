import React, { useContext, useEffect } from "react";
//Context
import proyectoContext from "../../context/proyectos/proyectoContext";
//componenets
import Proyecto from "./Proyecto";
//Libraries
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoProyectos = () => {
  //USE_CONTEXT
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  //USE_EFFECT
  useEffect(() => {
    obtenerProyectos();
  }, []);

  //Revisando si proyectos tiene contenido
  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((pro) => (
          <CSSTransition key={pro.id} timeout={350} classNames="proyecto">
            <Proyecto proyecto={pro} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
