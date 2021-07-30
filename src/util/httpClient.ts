import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const httpClient = (function () {
  let instance: AxiosInstance;

  const handleResponse = ({ data }: AxiosResponse) => data;

  const handleError = (error: any) => Promise.reject(error);

  const initResponseInterceptor = () => {
    instance.interceptors.response.use(handleResponse, handleError);
  };

  const create = (baseURL: string | undefined) => {
    instance = axios.create({ baseURL });
    initResponseInterceptor();
  };

  const get = (url: string, config?: AxiosRequestConfig) =>
    instance.get(url, config);
  const post = (url: string, body: any, config?: AxiosRequestConfig) =>
    instance.post(url, body, config);
  const put = (url: string, body: any, config?: AxiosRequestConfig) =>
    instance.put(url, body, config);
  const del = (url: string, config?: AxiosRequestConfig) =>
    instance.delete(url, config);

  return {
    create,
    get,
    post,
    put,
    del,
  };
})();

export default httpClient;
