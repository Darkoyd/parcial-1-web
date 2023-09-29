import axios from 'axios'

const baseURL = 'http://localhost:3001'

class AxiosClient {
  instance = null

  get client() {
    return this.instance != null ? this.instance : this.init()
  }

  init() {
    const axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance = axiosInstance
    return axiosInstance
  }

  get(url) {
    return this.client.get(url)
  }

  post(url, data) {
    return this.client.post(url, data)
  }

  put(url, data) {
    return this.client.put(url, data)
  }

  delete(url) {
    return this.client.delete(url)
  }
}

export const client = new AxiosClient()
