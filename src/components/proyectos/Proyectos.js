import React from "react";
//Components
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import FormTarea from "../taks/FormTarea";
import ListadoTareas from "../taks/ListadoTareas";

const Proyectos = () => {
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
