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

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksProject: state.tasks.filter(
          (t) => t.proyectoId === action.payload
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
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
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };

    case STATE_TASK:
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? action.payload : t
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
