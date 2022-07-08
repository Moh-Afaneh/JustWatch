import axios from "axios";
import queryString from "query-string";
import APICofig from "./APICofig";
console.log(123);
const AxiosClient = axios.create({
  baseURL: APICofig.Base_Url,
  headers: {
    "Content-type": "application/json",
  },
  params: {
    api_key: APICofig.apikey,
  },
  paramsSerializer: (params) =>
    queryString.stringify({
      ...params,
      api_key: APICofig.apikey,
    }),
});

AxiosClient.interceptors.request.use(async (config) => {
  console.log(config);
  return config;
});
AxiosClient.interceptors.response.use(
  async (response) => {
    if (response && response.data) {
      console.log(response);
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
