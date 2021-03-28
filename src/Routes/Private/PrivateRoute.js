import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import  NavBarTask from "../../components/NavBarTask";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <>
          <NavBarTask  {...props} />
          <Component {...props} />
          </>
        ) : (
          <Redirect to="/signin" />
        );
      }}
    ></Route>
  );
}