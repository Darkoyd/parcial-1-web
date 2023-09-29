import { client } from './AxiosClient.js'

export const login = async (data) => {

  try {
    const res = await client.post('/login', data)
    return res
  } catch (e) {
    return e
  }
}
