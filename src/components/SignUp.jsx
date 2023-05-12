import React, { useState } from "react";
import{apiURL} from "./App";

function SignUp() {

    // const [ firstName, setFirstName ] = useState("");
    // const [ lastName, setLastName ] = useState("");
    const [ userName, setUserName ] = useState("");
    const [ pswd, setPswd ] = useState("");

    // function handleFirstName(event) {
    //     setFirstName(event.target.value);
    // }

    // function handleLastName(event) {
    //     setLastName(event.target.value);
    // }

    function handleUserName(event) {
        setUserName(event.target.value);
    }

    function handlePassword(event) {
        setPswd(event.target.value);
    }

    return (<div>
        <form action={`${apiURL}/signup_27031996_saf`} method="POST">
            {/* <label for="first_name_user" className="first_user_details">First Name: </label>
            <input id="first_name_user" name="fiName" value={firstName} onChange={handleFirstName} required /> <br /><br />
            <label for="last_name_user" className="last_user_details">Last Name: </label>
            <input id="last_name_user" name="laname" value={lastName} onChange={handleLastName} required /> <br /><br /> */}
            <label for="username_user" className="login_user_details">Username: </label>
            <input id="username_user" name="logindetails" value={userName} onChange={handleUserName} required /> <br /><br />
            <label for="username_password" className="login_user_pass_details">Password: </label>
            <input type="password" id="username_password" name="password_detail" value={pswd} onChange={handlePassword} required /> <br /><br />
            <button type="sumbit">Sign Up</button>
        </form>
    </div>)
};

export { SignUp };