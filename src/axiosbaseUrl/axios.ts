import axios from "axios";

const headers = {};

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  headers,
  withCredentials: true,
});
