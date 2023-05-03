import axios from "axios";
const http = axios.create({
  baseURL: "http://vm4415096.25ssd.had.wf",
});

http.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token} `;
      config.headers["Accept"] = "application/json";
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default http;
