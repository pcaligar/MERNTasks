import React, { useContext } from "react";
//Context
import proyectoContext from "../../context/proyectos/proyectoContext";
import taskContext from "../../context/tasks/taskContext";

const Tarea = ({ task }) => {
  //USE_CONTEXT
  const proyectosContext = useContext(proyectoContext);
  const { project } = proyectosContext;

  const tasksContext = useContext(taskContext);
  const { getTasks, deleteTask, updateTask, getCurrentTask } = tasksContext;

  //DESTRUCTURING
  const [currentProject] = project;

  //FUNCTIONS
  const handleOnClickDeleteTask = () => {
    deleteTask(task._id, currentProject._id);
    getTasks(currentProject._id);
  };

  const handleOnClickChangeState = () => {
    task.state = !task.state;
    console.log(task.state);
    updateTask(task);
  };

  const handleOnclickEditButton = () => {
    getCurrentTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.state ? (
          <button
            type="button"
            className="completo"
            onClick={handleOnClickChangeState}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={handleOnClickChangeState}
          >
            Incomplete
          </button>
        )}
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primario"
          onClick={handleOnclickEditButton}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={handleOnClickDeleteTask}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Tarea;
