import React, { useContext, useState, useEffect } from "react";
//Context
import proyectoContext from "../../context/proyectos/proyectoContext";
import taskContext from "../../context/tasks/taskContext";

const FormTarea = () => {
  //USE_CONTEXT;
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tasksContext = useContext(taskContext);
  const {
    taskSelected,
    errorTask,
    getTasks,
    addNewTask,
    validarTask,
    updateTask,
    cleanSelectedTask,
  } = tasksContext;

  //USE_EFFECT
  useEffect(() => {
    if (taskSelected !== null) {
      setTask(taskSelected);
    } else {
      setTask({ nombre: "" });
    }
  }, [taskSelected]);

  //USE_STATE
  const [task, setTask] = useState({
    nombre: "",
  });

  //VARIABLES
  if (!proyecto) return null;
  //array destructuring para extraer el proyecto actual
  const [poyectoActual] = proyecto; //proyecto es un array y el destructuring equivaldria a la posicion 0 del array

  const { nombre } = task;

  //FUNCTIONS
  const handleOnSubmitTaskForm = (e) => {
    e.preventDefault();
    //Validations
    if (nombre.trim() === "") {
      validarTask();
      return;
    }

    //Check if we are editing a task or adding a new
    if (taskSelected === null) {
      //Add the new task to the tasks state
      task.proyectoId = poyectoActual.id;
      task.estado = false;
      addNewTask(task);
    } else {
      //Update selected task
      updateTask(task);
      cleanSelectedTask();
    }

    //Get and filter tasks of the current project
    getTasks(poyectoActual.id);

    //Reset form
    setTask({ nombre: "" });
  };

  const handleOnChangeTaskForm = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleOnSubmitTaskForm}>
        <div className="contenedor-input">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre tarea..."
            className="input-text"
            value={nombre}
            onChange={handleOnChangeTaskForm}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            value={taskSelected ? "Editar Tarea" : "Agregar Tarea"}
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
      </form>
      {errorTask ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
