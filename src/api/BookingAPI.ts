import axios from 'config/axios'
import { AxiosResponse } from 'axios'
import { UserRegisterData, UserLoginData } from 'components'
import { PATH_URL } from 'config/pathUrl'

export class BookingAPI {
  static registerUser = async (
    user: UserRegisterData,
  ): Promise<AxiosResponse> => axios.post('/register', user)

  static loginUser = async (user: UserLoginData): Promise<AxiosResponse> =>
    axios.post('/login', user)

  static showMessage = async (msg: string): Promise<AxiosResponse> =>
    axios.get(`/${msg}`)
}
