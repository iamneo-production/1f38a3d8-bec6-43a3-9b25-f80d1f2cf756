import axios from "axios";

const API = axios.create({ 
    baseURL: "https://8080-defbdcccffddcdafbacfedaceeaeaadbdbabf.project.examly.io" 
});
export const uploadPost = (formData, config) => API.post("/api/posts", formData, config);