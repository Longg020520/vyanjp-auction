import { message } from "antd";
import Axios from "axios";

export const baseURL = process.env.REACT_APP_API_URL;

const Api = Axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60 * 1000,
  validateStatus: (status) => {
    return status >= 200 && status < 400;
  },
});

export const setTokenHeader = (accessToken: string) => {
  Api.defaults.headers["x-session"] = accessToken;
  sessionStorage.setItem("token", accessToken);
};

Api.interceptors.response.use(
  // Trả về data cho client
  (response) => {
    return response.data;
  },

  (error) => {
    console.log(error);
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default Api;
