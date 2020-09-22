//Types
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types/typesProject";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return { ...state, formulario: true };
    case OBTENER_PROYECTOS:
      return { ...state, proyectos: action.payload };
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
        errorFormulario: false,
      };
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorFormulario: true,
      };
    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyecto: state.proyectos.filter((pro) => pro.id === action.payload),
      };
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter((pro) => pro.id !== action.payload),
        proyecto: null,
      };
    default:
      return state;
  }
};
