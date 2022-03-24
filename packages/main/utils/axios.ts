import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export async function get<T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>,
): Promise<R> {
  if (url.includes('http')) return axios.get(url, config);
  else return axios.get(process.env.API_HOST + url, config);
}

export async function post<T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>,
): Promise<R> {
  if (url.includes('http')) return axios.post(url, data, config);
  else return axios.post(process.env.API_HOST + url, data, config);
}
