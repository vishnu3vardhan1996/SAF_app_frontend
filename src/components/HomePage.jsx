import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    // Redirect to login page after 2 seconds
    const redirectTimer = setTimeout(() => {
      return <Navigate to="/login" />;
    }, 2000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return <div>Redirecting...</div>;
};

export { HomePage };