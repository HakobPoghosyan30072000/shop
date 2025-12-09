import axios from "axios";
import { requestInterceptor } from "./interceptors/request";
import { errorInterceptor, responseInterceptor } from "./interceptors/response";

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

client.interceptors.request.use(requestInterceptor)
client.interceptors.response.use(responseInterceptor, errorInterceptor)

export default client