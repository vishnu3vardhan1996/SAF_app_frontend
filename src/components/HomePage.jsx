import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();
    // useEffect(() => {
    //     // Redirect to login page after 2 seconds
    //     const redirectTimer = setTimeout(() => {
    //         <Navigate to={`${process.env.REACT_APP_LOGIN_ROUTE}`} />;
    //     }, 2000);



    //     return () => clearTimeout(redirectTimer);
    // }, []);

    navigate(`${process.env.REACT_APP_LOGIN_ROUTE}`)
};

export { HomePage };