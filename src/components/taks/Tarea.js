import React, { useContext } from "react";
//Context
import proyectoContext from "../../context/proyectos/proyectoContext";
import taskContext from "../../context/tasks/taskContext";

const Tarea = ({ tarea }) => {
  //USE_CONTEXT
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tasksContext = useContext(taskContext);
  const {
    getTasks,
    deleteTask,
    changeStateTask,
    getCurrentTask,
  } = tasksContext;

  //DESTRUCTURING
  const [poyectoActual] = proyecto;

  //FUNCTIONS
  const handleOnClickDeleteTask = () => {
    deleteTask(tarea.id);
    getTasks(poyectoActual.id);
  };

  const handleOnClickChangeState = () => {
    tarea.estado = !tarea.estado;
    console.log(tarea.estado);
    changeStateTask(tarea);
  };

  const handleOnclickEditButton = () => {
    getCurrentTask(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={handleOnClickChangeState}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={handleOnClickChangeState}
          >
            Incompleto
          </button>
        )}
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primario"
          onClick={handleOnclickEditButton}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={handleOnClickDeleteTask}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
