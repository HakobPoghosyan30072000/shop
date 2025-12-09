import client from "@/lib/axios/client"
import { ISignUpPayload } from "@/types/auth"

export const AuthService = {
    signUp: async (payload: ISignUpPayload) => {
        return (await client.post('/auth/register', payload)).data
    }
}