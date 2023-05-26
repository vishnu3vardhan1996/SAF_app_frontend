import React from "react";
import { Route, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function ProtectedRoutes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        cookies.get("TOKEN") ? (
          <Component />
        ) : (
          <Navigate to="/" state={{ from: rest.location }} replace />
        )
      }
    />
  );
}

export { ProtectedRoutes }
