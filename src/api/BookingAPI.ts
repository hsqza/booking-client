import axios from 'config/axios'
import { AxiosResponse } from 'axios'
import { UserRegisterData, UserLoginData } from 'components'

export class BookingAPI {
  static userInfo = async (): Promise<AxiosResponse> => axios.get('/user')

  static logoutUser = async (): Promise<AxiosResponse> => axios.get('/logout')

  static registerUser = async (
    user: UserRegisterData,
  ): Promise<AxiosResponse> => axios.post('/register', user)

  static loginUser = async (user: UserLoginData): Promise<AxiosResponse> =>
    axios.post('/login', user)

  static showMessage = async (msg: string): Promise<AxiosResponse> =>
    axios.get(`/${msg}`)
}
