import {request} from "@/service/http";

export const login = async (data) => {
    return await request.post<any>('/user/admin1', {}, {params: data})
}

export const textGet  = async () => {
    return await request.get<any>('/user/info')
}