import { createSlice } from '@reduxjs/toolkit'

import { User } from '../../types/user.ts'

interface AuthState {
  user: User | null
  loading: boolean
}

const initialState: AuthState = {
  user: null,
  loading: true,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: () => {},
})

// eslint-disable-next-line no-empty-pattern
export const {} = authSlice.actions
export default authSlice.reducer
