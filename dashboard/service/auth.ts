import { API_ENDPOINTS } from "@/constants/api"
import client from "@/lib/axios/client"
import { ISignUpPayload, ISignInPayload } from "@/types/auth"

export const AuthService = {
    signUp: async (payload: ISignUpPayload) => {
        return (await client.post(API_ENDPOINTS.REGISTER, payload)).data
    },
    signIn: async (payload: ISignInPayload) => {
        return (await client.post(API_ENDPOINTS.LOGIN, payload)).data
    }
}