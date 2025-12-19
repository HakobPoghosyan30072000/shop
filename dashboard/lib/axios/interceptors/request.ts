import { STORAGE_KEYS } from "@/constants/storageKeys";
import { clientCookies } from "@/lib/storage/client";
import { InternalAxiosRequestConfig } from "axios";

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = clientCookies.get(STORAGE_KEYS.ACCESS_TOKEN)
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}