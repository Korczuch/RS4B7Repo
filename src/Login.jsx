import React, { useState } from "react";
import './Login.css';


export const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username)
    }

    return(
        <div className="auth-form-container">
        <form className="login-form"onSubmit={handleSubmit}>
        <label for="username: ">Username: </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="Username" placeholder="example: JohnAppleseed123" id="username" name="username"/>
        <label for="password: ">Password: </label>
        <input value={password} onChange={(e) => setPassword(e.target.value)}type="Password" placeholder="Password" id="password" name="password"/>
        <button type= "submit">Log in</button>
        </form>
        </div>
    )
}