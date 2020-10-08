import React, { useReducer } from "react";
import axiosClient from "../../config/axios";
import authToken from "../../config/authenticationToken";
import authReducer from "./authReducer";
import authContext from "./authContext";
import {
  REGISTERED_SUCCESSFULLY,
  REGISTERED_ERROR,
  GET_USER,
  LOGIN_SUCCESSFULLY,
  LOGIN_ERROR,
  CLOSE_SESSION,
} from "../../types/typesAuth";

const AuthState = (props) => {
  //INITIAL STATE
  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //FUNCTIONS
  const registerUser = async (data) => {
    try {
      const response = await axiosClient.post("/api/users", data);
      console.log(response.data);

      dispatch({
        type: REGISTERED_SUCCESSFULLY,
        payload: response.data,
      });

      //Get the user
      returnAthenticatedUser();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispatch({
        type: REGISTERED_ERROR,
        payload: alert,
      });
    }
  };

  const returnAthenticatedUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      authToken(token);
    }

    try {
      const response = await axiosClient.get("api/auth");
      console.log(response.data);

      dispatch({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const LogInUser = async (data) => {
    try {
      const response = await axiosClient.post("/api/auth", data);
      //console.log(response);
      dispatch({
        type: LOGIN_SUCCESSFULLY,
        payload: response.data,
      });

      //Get the user
      returnAthenticatedUser();
    } catch (error) {
      console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alert,
      });
    }
  };

  const SignOff = () => {
    dispatch({
      type: CLOSE_SESSION,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        loading: state.loading,
        registerUser,
        LogInUser,
        returnAthenticatedUser,
        SignOff,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
