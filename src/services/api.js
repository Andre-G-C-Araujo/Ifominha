import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodapi-6d29.onrender.com",
});
