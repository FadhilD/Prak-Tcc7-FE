import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../auth/useAuth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate("/notes");
    } else {
      alert("Login gagal. Cek kembali username & password.");
    }
  };

  return (
    <div className="container" style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h2 className="has-text-centered mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="field">
        <label className="label has-text-black">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="field">
        <label className="label has-text-black">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="field mt-4">
          <div className="control">
            <button className="button is-primary is-fullwidth" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>

      <p className="has-text-centered mt-4">
        Belum punya akun? <Link to="/register">Daftar</Link>
      </p>
    </div>
  );
};

export default LoginPage;
