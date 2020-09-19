import React, { useContext, useEffect } from "react";
//Context
import proyectoContext from "../../context/proyectos/proyectoContext";
//componenets
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  //USE_CONTEXT
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  //USE_EFFECT
  useEffect(() => {
    obtenerProyectos();
  }, []);

  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((pro) => (
        <Proyecto key={pro.id} proyecto={pro} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
