import axios from "axios";

const API = axios.create({ baseURL: "https://8080-defbdcccffddcdafbacfedaceeaeaadbdbabf.project.examly.io" });

export const logIn = (formData) => API.post("/api/authenticate", formData);
export const userDetails = (formData) => API.post("/api/user/details", formData);
export const signUp = (formData) => API.post("/api/register", formData);