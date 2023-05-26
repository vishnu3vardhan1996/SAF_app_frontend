import React, { useEffect } from "react";
import {reactURL} from "./App";
// import { useNavigate } from "react-router-dom";
// import { Login } from "./Login";

const HomePage = () => {
    return (<div>

        <h1>Home Page</h1>
    
        <a href={`${reactURL}/login`}>
            <h1>Login</h1>
        </a>

        <a href={`${reactURL}/cust_update`}>
            <h1>Cust_update</h1>
        </a>
    </div>)
};

export { HomePage };