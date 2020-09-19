import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Login from "./auth/Login";
import NuevaCuenta from "./auth/NuevaCuenta";
import Proyectos from "./proyectos/Proyectos";
import ProyectoState from "../context/proyectos/proyectoState";

function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
      </Router>
    </ProyectoState>
  );
}
export default App;
