
// src/api.js
import axios from "axios";
export const api = axios.create({
  baseURL: "https://infohub-backend-kvcs.onrender.com",
});
