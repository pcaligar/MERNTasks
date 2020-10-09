//Types
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT,
} from "../../types/typesProject";

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return { ...state, form: true };
    case GET_PROJECTS:
      return { ...state, projects: action.payload };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        errorForm: false,
      };
    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true,
      };
    case CURRENT_PROJECT:
      return {
        ...state,
        project: state.projects.filter((pro) => pro._id === action.payload),
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((pro) => pro._id !== action.payload),
        project: null,
      };
    case ERROR_PROJECT:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
