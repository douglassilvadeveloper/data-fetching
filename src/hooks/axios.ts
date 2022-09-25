import axios from "axios";
import { BASE_URL } from "./baseUrl";

export function getAPIClient() {
  const api = axios.create({
    baseURL: BASE_URL,
  });

  api.interceptors.request.use((config) => {
    console.log(config);

    return config;
  });

  return api;
}
