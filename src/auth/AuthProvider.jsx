// src/auth/AuthProvider.jsx
import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import axios from "../api/axiosInstance";
import PropTypes from 'prop-types';
import { BASE_URL } from "../utils/utils.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

const login = async (username, password) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      credentials: "include", // ⬅️ WAJIB biar cookie dari server masuk
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login gagal");
    }

    setAccessToken(data.accessToken);
    localStorage.setItem("accessToken", data.accessToken);
    return true;

  } catch (err) {
    console.error("Login failed:", err);
    return false;
  }
};


  
  const logout = () => {
    setAccessToken(null);
    Cookies.remove("refreshToken");
  };

  const refreshAccessToken = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/token`);
      setAccessToken(res.data.accessToken);
      return res.data.accessToken;
    } catch (err) {
      console.error("Token refresh failed:", err);
      logout();
      return "kosong";
    }
  };



  return (
    <AuthContext.Provider
      value={{ accessToken, login, logout, refreshAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);