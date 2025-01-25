import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Can be added axios interceptors. Like adding accessToken to the headers and etc

export default axiosInstance
