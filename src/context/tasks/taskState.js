import React, { useReducer } from "react";
//Context
import taskContext from "./taskContext";
//Reducer
import taskReducer from "./taskReducer";
//libraries
//import { v4 as uuid } from "uuid";
import axiosClient from "../../config/axios";
//Types
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  //STATE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK,
} from "../../types/typesTask";

const TaskState = (props) => {
  const initialState = {
    tasksProject: [],
    errorTask: false,
    taskSelected: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  //FUNCTIONS
  const getTasks = async (project) => {
    try {
      const response = await axiosClient.get("/api/tasks", {
        params: { project },
      });
      //console.log(response);

      dispatch({
        type: TASKS_PROJECT,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const addNewTask = async (task) => {
    //task.id = uuid();
    try {
      const response = await axiosClient.post("/api/tasks", task);
      console.log(response);
      dispatch({
        type: ADD_TASK,
        payload: task,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const validarTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  const deleteTask = async (id, project) => {
    try {
      await axiosClient.delete(`/api/tasks/${id}`, { params: { project } });

      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const getCurrentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };

  const updateTask = async (task) => {
    try {
      const response = await axiosClient.put(`/api/tasks/${task._id}`, task);
      //console.log("updateTask response: ", response);

      dispatch({
        type: UPDATE_TASK,
        payload: response.data,
      });
    } catch (error) {
      console.log("updateTask error: ", error.response);
    }
  };

  const cleanSelectedTask = () => {
    dispatch({
      type: CLEAN_TASK,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasksProject: state.tasksProject,
        errorTask: state.errorTask,
        taskSelected: state.taskSelected,
        getTasks,
        addNewTask,
        validarTask,
        deleteTask,
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
