import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();
  useEffect(() => {
    history.push("/login");
  }, [history]);

  return <div>Redirecting...</div>;
};

export {HomePage} ;
