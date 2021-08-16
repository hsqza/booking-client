import React, { FC, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { LoginForm, UserLoginData } from 'components'
import { BookingAPI } from 'api/BookingAPI'
import useForm from 'hooks/useForm'
import { convertObjectMessageErrorsToString } from 'utils/functions'
import { toast } from 'react-toastify'
import { setUser } from 'store/slice/authSlice'
import { useAppDispatch } from 'store/hooks'
import { User } from 'interface'
import { PATH_URL } from 'config/pathUrl'

const Register: FC<RouteComponentProps> = ({ history }): JSX.Element => {
  const dispatch = useAppDispatch()

  const [initialData, setInitialData] = useState({
    email: '',
    password: '',
  })

  const onSubmitForm = () => {
    BookingAPI.loginUser(user)
      .then((res) => {
        const user = res.data.user as User
        dispatch(setUser(user))
        toast.success(`Logged in ${user.email}`)
        history.push(PATH_URL.home)
      })
      .catch((e) => {
        if (e.response.data?.error) {
          const errMsg = convertObjectMessageErrorsToString(
            e.response.data.error,
          )
          toast.error(errMsg)
        }
      })
  }

  const {
    data: user,
    onChange,
    onSubmit,
  } = useForm<UserLoginData>(onSubmitForm, initialData)

  return (
    <>
      <div className='container-fluid'>
        <h1 className='p-5 text-center'>Login Page</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <LoginForm data={user} onUpdate={onChange} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
