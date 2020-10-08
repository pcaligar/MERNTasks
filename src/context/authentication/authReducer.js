import {
  REGISTERED_SUCCESSFULLY,
  REGISTERED_ERROR,
  GET_USER,
  LOGIN_SUCCESSFULLY,
  LOGIN_ERROR,
  CLOSE_SESSION,
} from "../../types/typesAuth";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFULLY:
    case REGISTERED_SUCCESSFULLY:
      localStorage.setItem("token", action.payload.token); //The server return the token when the request is successful

      return {
        ...state,
        authenticated: true,
        message: null,
        loading: false,
      };

    case CLOSE_SESSION:
    case LOGIN_ERROR:
    case REGISTERED_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        authenticated: null,
        message: action.payload,
        loading: false,
      };

    case GET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
