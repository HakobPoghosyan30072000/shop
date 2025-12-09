import { InternalAxiosRequestConfig } from "axios"
import { cookies } from "next/headers"

export const requestInterceptorServer = async (config: InternalAxiosRequestConfig) => {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value || null

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
