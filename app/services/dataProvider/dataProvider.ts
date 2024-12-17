import axios, { AxiosInstance } from "axios";
import { getToken } from "./token";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  //@ts-ignore
  (request: AxiosRequestConfig) => {
    // Retrieve the token from local storage
    const token = getToken();
    // Check if the header property exists
    if (request.headers) {
      // Set the Authorization header if it exists
      request.headers["Authorization"] = `Bearer ${token}`;
    } else {
      // Create the headers property if it does not exist
      request.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return request;
  },
);
