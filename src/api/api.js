import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentios: true,
    headers: { 'API-KEY': '8b99e9f8-2763-4750-b568-f135ece214eb' }
})


export const userAPI = {
    getUsers(currentPage = 1, pageSize) {
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`)
            .then(resp => resp.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    },
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
}