import React, { FC, ChangeEventHandler, FormEvent } from 'react'

export interface UserData {
  name: string
  email: string
  password: string
}

interface RegisterFormProps {
  data: UserData
  onUpdate: ChangeEventHandler<HTMLInputElement>
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const RegisterForm: FC<RegisterFormProps> = ({ data, onUpdate, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-control'
          placeholder='Enter name'
          value={data.name}
          onChange={onUpdate}
        />
      </div>

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

      <button type='submit' className='btn btn-block btn-primary mt-4'>
        Submit
      </button>
    </form>
  )
}

export default RegisterForm
