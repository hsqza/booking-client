import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'

interface UseFormData<D> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  values: D
}

function useForm<D>(callback: () => void, initialState: D): UseFormData<D> {
  const [values, setValues] = useState(initialState)

  useEffect(() => setValues(initialState), [initialState])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await callback()
  }

  return {
    values,
    onChange,
    onSubmit,
  }
}

export default useForm
