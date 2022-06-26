import axios from "axios";

export const HTTP = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});
