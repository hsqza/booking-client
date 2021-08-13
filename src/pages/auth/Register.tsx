import React, { FC, useState } from 'react'
import { RegisterForm, UserRegisterData } from 'components'
import useForm from 'hooks/useForm'
import { BookingAPI } from 'api/BookingAPI'
import { toast } from 'react-toastify'
import { convertObjectMessageErrorsToString } from 'utils/functions'
import { RouteComponentProps } from 'react-router-dom'
import { PATH_URL } from 'config/pathUrl'

const Register: FC<RouteComponentProps> = ({ history }): JSX.Element => {
  const [initialData, setInitialData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onSubmitForm = () => {
    BookingAPI.registerUser(user)
      .then(({ data }) => {
        toast.success(data.msg)
        history.push(PATH_URL.login)
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
  } = useForm<UserRegisterData>(onSubmitForm, initialData)

  return (
    <>
      <div className='container-fluid'>
        <h1 className='p-5 text-center'>Register Page</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <RegisterForm data={user} onUpdate={onChange} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
