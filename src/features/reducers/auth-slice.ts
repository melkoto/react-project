import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '../../types/user'

import { apiAuthSlice } from './auth-api-slice'

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
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.loading = false
    },
    clearUser: (state) => {
      state.user = null
      state.loading = false
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(apiAuthSlice.endpoints.fetchUser.matchPending, (state) => {
      state.loading = true
    })
    builder.addMatcher(apiAuthSlice.endpoints.fetchUser.matchFulfilled, (state, { payload }) => {
      state.user = payload
      state.loading = false
    })
    builder.addMatcher(apiAuthSlice.endpoints.fetchUser.matchRejected, (state) => {
      state.loading = false
    })
  },
})

export const { setUser, clearUser, setLoading } = authSlice.actions
export default authSlice.reducer
