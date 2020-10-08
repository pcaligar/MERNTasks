import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Login from "./auth/Login";
import NuevaCuenta from "./auth/NuevaCuenta";
import Proyectos from "./proyectos/Proyectos";
import PrivateRoute from "../components/routes/privateRoute";
//States
import ProyectoState from "../context/proyectos/proyectoState";
import TaskState from "../context/tasks/taskState";
import AlertState from "../context/alert/alertState";
import AuthState from "../context/authentication/authState";
//Libraries
import authToken from "../config/authenticationToken";

//check if the token exist
const token = localStorage.getItem("token");
if (token) {
  authToken(token);
}

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <ProyectoState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={NuevaCuenta} />
                {/* PrivateRoute, is a higher order component that take like parameter Proyectos component */}
                <PrivateRoute exact path="/projects" component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProyectoState>
  );
}
export default App;
