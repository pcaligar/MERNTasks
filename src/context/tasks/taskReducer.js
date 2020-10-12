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

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksProject: action.payload,
        // state.tasksProject.filter(
        //   (t) => t.proyectoId === action.payload
        // ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasksProject: [action.payload, ...state.tasksProject],
        errorTask: false,
      };

    case VALIDATE_TASK:
      return {
        ...state,
        errorTask: true,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.filter(
          (t) => t._id !== action.payload
        ),
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.map((t) =>
          t._id === action.payload._id ? action.payload : t
        ),
      };

    case CURRENT_TASK:
      return {
        ...state,
        taskSelected: action.payload,
      };

    case CLEAN_TASK:
      return {
        ...state,
        taskSelected: null,
      };

    default:
      return state;
  }
};
