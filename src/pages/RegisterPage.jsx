// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const RegisterPage = () => {
//   const [form, setForm] = useState({ username: '', password: '', confirm_password: '' });
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async e => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form)
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert('Registrasi berhasil!');
//         navigate('/login');
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       alert('Gagal daftar');
//     }
//   };

//   return (
//     <div className="bg-white p-8 rounded shadow-md w-80">
//       <h2 className="text-xl mb-4">Register</h2>
//       <form onSubmit={handleRegister}>
//         <input className="input" name="username" placeholder="Username" onChange={handleChange} required />
//         <input className="input" name="password" type="password" placeholder="Password" onChange={handleChange} required />
//         <input className="input" name="confirm_password" type="password" placeholder="Confirm Password" onChange={handleChange} required />
//         <button className="btn mt-4 w-full">Register</button>
//       </form>
//       <p className="mt-4 text-sm text-center">
//         Sudah punya akun? <Link to="/login" className="text-blue-600">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default RegisterPage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const RegisterPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username,
//           password,
//           confirm_password: confirmPassword,
//         }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert("Registrasi berhasil!");
//         navigate("/");
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       alert("Terjadi kesalahan.");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         /><br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         /><br />
//         <input
//           type="password"
//           placeholder="Konfirmasi Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         /><br />
//         <button type="submit">Register</button>
//       </form>
//       <p>
//         Sudah punya akun? <a href="/">Login</a>
//       </p>
//     </div>
//   );
// };

// export default RegisterPage;


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          confirm_password: confirmPassword,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registrasi berhasil!");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Terjadi kesalahan.");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Konfirmasi Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Sudah punya akun? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
