import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserProps {
  name: string
  email: string
  id: string
}

interface UserState {
  user: UserProps
}

const initialState: UserState = {
  user: {
    name: '',
    email: '',
    id: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserProps>) => {
      state.user.email = payload.email
      state.user.name = payload.name
      state.user.id = payload.id
    },
  },
})

export const { setUser } = authSlice.actions

export default authSlice.reducer
