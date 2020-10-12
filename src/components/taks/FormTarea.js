import React, { useContext, useState, useEffect } from "react";
//Context
import proyectoContext from "../../context/proyectos/proyectoContext";
import taskContext from "../../context/tasks/taskContext";

const FormTarea = () => {
  //USE_CONTEXT;
  const proyectosContext = useContext(proyectoContext);
  const { project } = proyectosContext;

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
      setTask({ name: "" });
    }
  }, [taskSelected]);

  //USE_STATE
  const [task, setTask] = useState({
    name: "",
  });

  //VARIABLES
  if (!project) return null;
  //array destructuring to get the current project
  const [currentProject] = project; //project is an array and the destructuring should be the zero position of the array

  const { name } = task;

  //FUNCTIONS
  const handleOnSubmitTaskForm = (e) => {
    e.preventDefault();
    //Validations
    if (name.trim() === "") {
      validarTask();
      return;
    }

    //Check if we are editing a task or adding a new
    if (taskSelected === null) {
      //Add the new task to the tasks state
      task.project = currentProject._id;
      //task.state = false; It's no required because in the model task is false by default
      addNewTask(task);
    } else {
      //Update selected task
      updateTask(task);
      cleanSelectedTask();
    }

    //Get and filter tasks of the current project
    getTasks(currentProject._id);

    //Reset form
    setTask({ name: "" });
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
            name="name"
            placeholder="task name..."
            className="input-text"
            value={name}
            onChange={handleOnChangeTaskForm}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            value={taskSelected ? "Edit Task" : "Add Task"}
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
      </form>
      {errorTask ? (
        <p className="mensaje error">The name of the task is required</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
