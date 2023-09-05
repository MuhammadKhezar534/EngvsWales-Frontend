import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getPlayersList, login } from "../../apis/api";
import Loader from "../../components/Loader";
import { errThrough } from "../../utilities/function";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = () => {
    setLoading(true);
    login({
      email: username,
      password,
    })
      .then((resp) => {
        localStorage.setItem("XAUTH", resp?.data?.data?.access_token);
        getTeams("NORTH");
        getTeams("SOUTH");
        setLoading(false);
        navigate("/profile");
      })
      .catch((err) => {
        setLoading(false);
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

  const getTeams = (teamType) => {
    getPlayersList(teamType)
      .then((resp) => {
        localStorage.setItem(teamType, JSON.stringify(resp?.data));
      })
      .catch((err) => {
        errThrough(err, navigate);
      });
  };

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
        <button type="submit" className="butt-log">
          Login
        </button>

        {error && <p className="login-error">{error}</p>}
      </form>

      <Loader loading={loading} />
    </div>
  );
};

export default LoginForm;
