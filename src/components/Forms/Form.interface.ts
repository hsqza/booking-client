import { ChangeEventHandler, FormEvent } from 'react'

export interface FormProps<D> {
  data: D
  onUpdate: ChangeEventHandler<HTMLInputElement>
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
