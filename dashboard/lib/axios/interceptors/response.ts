import { AxiosError, AxiosResponse } from "axios"

export const responseInterceptor = (response: AxiosResponse) => response

export const errorInterceptor = (error: AxiosError) => {
  if (error.response?.status === 401) {
    // window.location.href = "/signin";
  }

  return Promise.reject(error)
}   