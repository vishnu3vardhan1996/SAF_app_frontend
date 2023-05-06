import React from "react";
import { reactURL } from "./App";

function SignUpFailure() {
    return(<div>
        <h4>Sorry, Username already taken, pls try with different username.</h4>
        <a href={`${reactURL}/signup`} className="btn_signup">Sign Up</a>
    </div>)
}

export {SignUpFailure};