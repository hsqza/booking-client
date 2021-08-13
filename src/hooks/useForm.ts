import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'

interface UseFormData<D> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  data: D
}

function useForm<D>(callback: () => void, initialState: D): UseFormData<D> {
  const [data, setData] = useState(initialState)

  useEffect(() => setData(initialState), [initialState])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await callback()
  }

  return {
    data,
    onChange,
    onSubmit,
  }
}

export default useForm
