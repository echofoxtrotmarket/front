import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class BasicAgent {
  protected _http: AxiosInstance;
  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this._http = axios.create({
      
      baseURL,
      ...config,
    });
    this._http.interceptors.request.use((config)=>{
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config;
    })
}}
