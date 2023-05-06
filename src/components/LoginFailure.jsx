import React from "react";
import { reactURL } from "./App";

function LoginFailure() {
    return(<div>
        <h4>Username/Password is not correct. Login with correct Username/Password.</h4>
        <a href={`${reactURL}/login`} className="btn_signup">LogIn</a>
    </div>)
}

export {LoginFailure}