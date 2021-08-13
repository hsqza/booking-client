import React, { FC } from 'react'
import { FormProps } from './Form.interface'

export interface UserLoginData {
  email: string
  password: string
}

const LoginForm: FC<FormProps<UserLoginData>> = ({
  data,
  onUpdate,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          name='email'
          id='email'
          className='form-control'
          placeholder='Enter email'
          value={data.email}
          onChange={onUpdate}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          className='form-control'
          placeholder='Enter password'
          value={data.password}
          onChange={onUpdate}
        />
      </div>

      <button
        type='submit'
        className='btn btn-block btn-primary mt-4'
        disabled={!(data.email && data.password)}
      >
        Submit
      </button>
    </form>
  )
}

export default LoginForm
