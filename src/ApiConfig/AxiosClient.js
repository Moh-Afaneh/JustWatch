import axios from "axios";
import queryString from "query-string";
import APICofig from "./APICofig";

const AxiosClient = axios.create({
  baseURL: APICofig.Base_Url,
  headers: {
    "Content-type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({
      ...params,
      api_key: APICofig.apikey,
    }),
});

AxiosClient.interceptors.request.use(async (config) => {
  return config;
});
AxiosClient.interceptors.response.use(
  async (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log(error);
    throw error;
  }
);

export default AxiosClient;
