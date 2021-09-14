import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '2d680b9e-4a82-47be-bb62-e0ea94d6b854' }
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
    getUser(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    putStatus(status) {
        return instance.put('profile/status', {status: status})
    }
}