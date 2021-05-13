/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";

class Request {
  private request: AxiosInstance;

  constructor() {
    this.request = axios;

    this.setupRequest();
    this.setupInterceptoprs();
  }

  setupInterceptoprs() {
    this.setupRequestInterceptor();
    this.setupResponseInterceptor();
  }

  private setupRequestInterceptor(): void {
    this.request.interceptors.request.use(
      (config: AxiosRequestConfig) => config
    );
  }

  private setupResponseInterceptor(): void {
    this.request.interceptors.response.use(
      (res) => res.data,
      (err: AxiosError) => Promise.reject(err)
    );
  }

  private setupRequest(): void {
    this.request.defaults = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  get<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
    return this.request.get(url, options);
  }

  post<T>(
    url: string,
    body: any,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.request.post(url, body, options);
  }

  put<T>(url: string, body: any, options: AxiosRequestConfig = {}): Promise<T> {
    return this.request.put(url, body, options);
  }

  delete<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
    return this.request.delete(url, options);
  }
}

export const request = new Request();
