import React, { useReducer } from "react";
//Context
import proyectoContext from "./proyectoContext";
//Reduce
import proyectoReducer from "./proyectoReducer";
//Types
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda " },
    { id: 2, nombre: "Intranet " },
    { id: 3, nombre: "Sitio " },
    { id: 4, nombre: "MERN " },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //Funcion para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
