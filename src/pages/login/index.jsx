import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../apis/api";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginUser = () => {
    login({
      email: username,
      password,
    })
      .then((resp) => {
        localStorage.setItem("XAUTH", resp?.data?.data?.access_token);
        navigate("/profile");
      })
      .catch((err) => {
        setError(err?.response?.data?.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can perform login logic, like API calls
    loginUser();
  };

  if (localStorage.getItem("XAUTH")) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="login-container">
      <div>
        <img src="/images/logo.png" alt="logo" />
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        <button type="submit">Login</button>

        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
