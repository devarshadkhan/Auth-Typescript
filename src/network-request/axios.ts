import axios from "axios";
const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_APIBASE_URL_,
  baseURL: "http://localhost:8000",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;

    // Add the token to the request headers All API security not directly not access browser API.
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
