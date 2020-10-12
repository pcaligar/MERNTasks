import React, { Fragment, useContext } from "react";
//components
import Tarea from "./Tarea";
//Context
import proyectoContext from "../../context/proyectos/proyectoContext";
import taskContext from "../../context/tasks/taskContext";
//Libraries
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  //USE_CONTEXT
  const proyectosContext = useContext(proyectoContext);
  const { project, deleteProject } = proyectosContext;

  const tasksContext = useContext(taskContext);
  const { tasksProject } = tasksContext;

  //There is no project selected
  if (!project) return <h2>Selects a project</h2>;

  //array destructuring to get the current project
  const [currentProject] = project; //project is an array and the destructuring should be the zero position of the array

  const handleOnclickDeleteProject = () => {
    deleteProject(currentProject._id);
  };

  return (
    <Fragment>
      <h2>Project: {currentProject.name}</h2>
      <ul className="Listado-tareas">
        {!tasksProject ? (
          <li className="tarea">
            <p>There is no task</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasksProject.map((task) => (
              <CSSTransition key={task._id} timeout={350} classNames="tarea">
                <Tarea task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={handleOnclickDeleteProject}
      >
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
