import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BOOKING}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.pathname = '/login'
    }
    return Promise.reject(error)
  },
)

export default instance
