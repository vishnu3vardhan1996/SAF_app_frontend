import React, { useState } from "react";
import{apiURL} from "./App";

function Login() {

    const [userName, setUserName] = useState("");
    const [pswd, setPswd] = useState("");

    function handleUserName(event) {
        setUserName(event.target.value);
    }

    function handlePassword(event) {
        setPswd(event.target.value);
    }

    return (<div>
        <form action={`${apiURL}/login`} method="POST">
            <label for="username_user" className="login_user_details">Username: </label>
            <input id="username_user" name="logindetails" value={userName} onChange={handleUserName} required /> <br /><br />
            <label for="username_password" className="login_user_pass_details">Password: </label>
            <input type="password" id="username_password" name="password_detail" value={pswd} onChange={handlePassword} required /> <br /><br />
            <button type="sumbit">Sign in</button>
        </form>
    </div>)
}

export { Login };