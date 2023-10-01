import { client } from './AxiosClient.js'

export const getAll = async () => {
    return await client.get('/cafes')
}

export const getById = async (id) => {
    return await client.get(`/cafes/${id}`)
}