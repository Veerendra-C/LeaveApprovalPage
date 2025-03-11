import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import LTextField from "../Login-TextFiled/LTextField";
import LoginButton from "../Login-Button/LoginButton";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const handleLogin = () => {
    if ((username === "admin" || username === "student") && password) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("/home");
    } else {
      alert("Invalid credentials");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login">
      <div className="login-box">
        <h1>Login</h1>
        <LTextField
          label={"Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LTextField
          label={"Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton label={"Login"} onClick={handleLogin} />
      </div>
    </div>
  );
}
