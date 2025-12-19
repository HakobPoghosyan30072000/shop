import { STORAGE_KEYS } from "@/constants/storageKeys";
import { serverCookies } from "@/lib/storage/server";
import { InternalAxiosRequestConfig } from "axios"

export const requestInterceptorServer = (config: InternalAxiosRequestConfig) => {
  const token = serverCookies.get(STORAGE_KEYS.ACCESS_TOKEN)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
