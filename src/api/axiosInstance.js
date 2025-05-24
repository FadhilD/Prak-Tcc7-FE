// src/api/axiosInstance.js
import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../utils/utils";

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

let isRefreshing = false;
let refreshSubscribers = [];

const subscribeTokenRefresh = (cb) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (token) => {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
};

// Intercept request
instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("accessToken");
    console.log("Sending token:", localStorage.getItem("accessToken"));

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercept response (refresh jika 401)
instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const response = await axios.get(`${BASE_URL}/token`, {
            withCredentials: true,
          });
          const newAccessToken = response.data.accessToken;
          localStorage.setItem("accessToken", newAccessToken);
          instance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          onRefreshed(newAccessToken);
        } catch (error) {
          console.error("Refresh token gagal:", error);
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise((resolve) => {
        subscribeTokenRefresh((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(axios(originalRequest));
        });
      });
    }

    return Promise.reject(err);
  }
);

export default instance;
