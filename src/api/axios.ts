import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivateInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
