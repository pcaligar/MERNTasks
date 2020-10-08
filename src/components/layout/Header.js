import React, { useContext, useEffect } from "react";
//Libraries
import AuthContext from "../../context/authentication/authContext";

const Header = () => {
  //USE_CONTEXT
  const authContext = useContext(AuthContext);
  const { user, returnAthenticatedUser, SignOff } = authContext;

  //USE_EFFECT
  //Get authenticate user info.
  //If the user is authenticated and the screen is refresh, we do not lose the information about authenticated user
  useEffect(() => {
    returnAthenticatedUser();
  }, []);

  //FUNCTIONS
  const handleClickCloseSession = () => {
    SignOff();
  };

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hola<span> {user.name}</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={handleClickCloseSession}
        >
          Sign off
        </button>
      </nav>
    </header>
  );
};

export default Header;
