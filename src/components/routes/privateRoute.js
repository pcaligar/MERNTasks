import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/authentication/authContext";

//Creating the higher order component. (A component that take like input other component)
const PrivateRoute = ({ component: Component, ...props }) => {
  //USE_CONTEXT
  const authContext = useContext(AuthContext);
  const { authenticated, loading, returnAthenticatedUser } = authContext;

  //USE_EFFECT
  //Get authenticate user info.
  //If the user is authenticated and the screen is refresh, we do not lose the information about authenticated user
  useEffect(() => {
    returnAthenticatedUser();
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !authenticated && !loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
