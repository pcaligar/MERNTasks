import React, { useContext } from "react";
//Context
import proyectoContext from "../../context/proyectos/proyectoContext";
import taskContext from "../../context/tasks/taskContext";

const Proyecto = ({ project }) => {
  //USE_CONTEXT
  const proyectosContext = useContext(proyectoContext);
  const { currentProject } = proyectosContext;

  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  //FUNCTIONS
  const handleOnclick = () => {
    currentProject(project._id);
    getTasks(project._id);
  };

  return (
    <li className="">
      <button type="button" className="btn btn-blank" onClick={handleOnclick}>
        {project.name}
      </button>
    </li>
  );
};

export default Proyecto;
