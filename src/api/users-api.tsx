import {GetItemsType, instance, APIResponseType} from "./api";
import {profileAPI} from "./profile-api";


export const usersApi = {
    getProfile(userId: number) {
        return profileAPI.getProfile(userId).then(res => res.data) as Promise<>
    },
    getUsers: function (currentPage = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>
    }
}