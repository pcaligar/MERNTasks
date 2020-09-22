import React, { useReducer } from "react";
//Context
import taskContext from "./taskContext";
//Reducer
import taskReducer from "./taskReducer";
//libraries
import { v4 as uuid } from "uuid";
//Types
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK,
} from "../../types/typesTask";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 1 },
      {
        id: 3,
        nombre: "Elegir Plataforma de Pago",
        estado: false,
        proyectoId: 2,
      },
      { id: 4, nombre: "Elegir Hosting", estado: true, proyectoId: 3 },
    ],
    tasksProject: [],
    errorTask: false,
    taskSelected: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  //FUNCTIONS
  const getTasks = (proyectoId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: proyectoId,
    });
  };

  const addNewTask = (task) => {
    task.id = uuid();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const validarTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  const changeStateTask = (task) => {
    dispatch({
      type: STATE_TASK,
      payload: task,
    });
  };

  const getCurrentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };

  const cleanSelectedTask = () => {
    dispatch({
      type: CLEAN_TASK,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        errorTask: state.errorTask,
        taskSelected: state.taskSelected,
        getTasks,
        addNewTask,
        validarTask,
        deleteTask,
        changeStateTask,
        getCurrentTask,
        updateTask,
        cleanSelectedTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
