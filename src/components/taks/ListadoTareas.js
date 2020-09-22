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
  const { proyecto, eliminarProyecto } = proyectosContext;

  const tasksContext = useContext(taskContext);
  const { tasksProject } = tasksContext;

  //Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  //array destructuring para extraer el proyecto actual
  const [poyectoActual] = proyecto; //proyecto es un array y el destructuring equivaldria a la posicion 0 del array

  const handleOnclickEliminar = () => {
    eliminarProyecto(poyectoActual.id);
  };

  return (
    <Fragment>
      <h2>Proyecto: {poyectoActual.nombre}</h2>
      <ul className="Listado-tareas">
        {!tasksProject ? (
          <li className="tarea">
            <p>No hay tarea</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasksProject.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={350} classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={handleOnclickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
