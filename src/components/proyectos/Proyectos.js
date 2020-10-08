import React, { useContext, useEffect } from "react";
//Components
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import FormTarea from "../taks/FormTarea";
import ListadoTareas from "../taks/ListadoTareas";
//Libraries
import AuthContext from "../../context/authentication/authContext";

const Proyectos = () => {
  //USE_CONTEXT
  const authContext = useContext(AuthContext);
  const { returnAthenticatedUser } = authContext;

  //USE_EFFECT
  //Get authenticate user info.
  //If the user is authenticated and the screen is refresh, we do not lose the information about authenticated user
  useEffect(() => {
    returnAthenticatedUser();
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Header />
        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
