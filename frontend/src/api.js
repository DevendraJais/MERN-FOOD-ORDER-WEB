import axios from "axios";

const BASE = import.meta.env.VITE_API_URL ||  "https://mern-food-order-web.onrender.com";

export const API = axios.create({
    baseURL: `${BASE}/api`,
});
