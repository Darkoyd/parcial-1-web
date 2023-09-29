import { client } from './AxiosClient.js'

export const getAll = () => {
    return client.get('/cafes')
}

export const getById = (id) => {
    return client.get(`/cafes/${id}`)
}