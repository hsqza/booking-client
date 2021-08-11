import React, { useState } from 'react'
import { RegisterForm, UserData } from 'components'
import useForm from 'hooks/useForm'

const Register = (): JSX.Element => {
  const [initialData, setInitialData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onSubmitForm = () => {
    console.log('Send form ', user)
  }

  const {
    values: user,
    onChange,
    onSubmit,
  } = useForm<UserData>(onSubmitForm, initialData)

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
