import { InternalAxiosRequestConfig } from "axios";

export const requestInterceptor = (config:InternalAxiosRequestConfig) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}