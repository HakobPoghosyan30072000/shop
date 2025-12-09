import axios from "axios"
import { responseInterceptor, errorInterceptor } from "./interceptors/response"
import { requestInterceptorServer } from "./interceptors/requestServer"

const server = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

server.interceptors.request.use(requestInterceptorServer)
server.interceptors.response.use(responseInterceptor, errorInterceptor)