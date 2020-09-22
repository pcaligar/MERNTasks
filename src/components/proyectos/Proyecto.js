import React, { useContext } from "react";
//Context
import proyectoContext from "../../context/proyectos/proyectoContext";
import taskContext from "../../context/tasks/taskContext";

const Proyecto = ({ proyecto }) => {
  //USE_CONTEXT
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  //FUNCTIONS
  const handleOnclick = () => {
    proyectoActual(proyecto.id);
    getTasks(proyecto.id);
  };

  return (
    <li className="">
      <button type="button" className="btn btn-blank" onClick={handleOnclick}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
