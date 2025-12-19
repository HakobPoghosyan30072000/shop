import { API_ENDPOINTS } from "@/constants/api"
import client from "@/lib/axios/client"
import { IUser } from "@/types/user"

export const UserService = {
    me: async (): Promise<IUser> => {
        return (await client.get(API_ENDPOINTS.PROFILE)).data
    }
}
