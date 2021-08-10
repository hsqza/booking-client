import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const isLoggedUser = createAsyncThunk<UserProps, number>(
  'auth/isLoggedUser',
  async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/comments`,
    )
    const res: Array<UserProps> = await response.json()

    const { email, user = 'User' } = res[0]

    return { email, user }
  },
)

interface UserProps {
  user: string
  email: string
}

interface UserState {
  user: UserProps
}

const initialState: UserState = {
  user: {
    user: '',
    email: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(isLoggedUser.fulfilled, (state, { payload }) => {
      state.user = payload
    })
  },
})

export default authSlice.reducer
