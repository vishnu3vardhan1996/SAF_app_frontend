import React, { useState } from "react";
import Cookies from "universal-cookie";
import { apiURL, reactURL } from "./App";
import axios from "axios";

const cookies = new Cookies();

function Login() {

    const [userName, setUserName] = useState("");
    const [pswd, setPswd] = useState("");

    function handleUserName(event) {
        setUserName(event.target.value);
    }

    function handlePassword(event) {
        setPswd(event.target.value);
    }

    function handleAxio() {
        let token;
        const configuration = {
            method: "post",
            url: `${apiURL}/login`,
            data: {
                userName,
                pswd,
            },
        };

        axios(configuration)
            .then((result) => {
                // alert(result.data.token);
                let token = result.data.token;
                cookies.set("TOKEN", token, {
                    path: "http://localhost:3001/",
                })

                const reconfiguration = {
                    method: "post",
                    url: `${apiURL}`,
                    data: {
                        token,
                    },
                }

                axios(reconfiguration)
                    .then((response) => {
                        // Handle the response
                        console.log(token);
                        console.log("Done!!")
                        window.location.href = `${reactURL}`;
                    })
                    .catch((error) => {
                        // Handle errors
                        console.log(error)
                    });

            })
            .catch((error) => {
                error = new Error();
            });

    };

    return (<div>
        <label for="username_user" className="login_user_details">Username: </label>
        <input id="username_user" name="logindetails" value={userName} onChange={handleUserName} required /> <br /><br />
        <label for="username_password" className="login_user_pass_details">Password: </label>
        <input type="password" id="username_password" name="password_detail" value={pswd} onChange={handlePassword} required /> <br /><br />
        <button onClick={handleAxio}>Sign in</button>

        <a href={`${reactURL}/cust_update/A-121`}>
            <h1>cust_bio_auth</h1>
        </a>
    </div>)
}

export { Login };

// import React, { useState } from 'react';
// import axios from 'axios';
// import {apiURL, reactURL} from "./App";

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post(`${apiURL}/login`, {
//       username: username,
//       password: password
//     })
//     .then((response) => {
//       console.log(response);
//       window.location.href = `${reactURL}/cust_bio_data`;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input type="text" onChange={(e) => setUsername(e.target.value)} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export { Login };
