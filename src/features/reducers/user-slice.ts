import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import api from '../../api/axios.ts'
import { User, UsersState } from '../../types/user.ts'

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
}

export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<User[]>('/users')
      return response.data
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Something went wrong.')
    }
  },
)

export const createUser = createAsyncThunk<User, User, { rejectValue: string }>(
  'users/createUser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.post<User>('/users', user)
      return response.data
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Something went wrong.')
    }
  },
)

export const updateUser = createAsyncThunk<User, User, { rejectValue: string }>(
  'users/updateUser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.put<User>(`/users/${user.id}`, user)
      return response.data
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Something went wrong.')
    }
  },
)

export const deleteUser = createAsyncThunk<number, number, { rejectValue: string }>(
  'users/deleteUser',
  async (userId, { rejectWithValue }) => {
    try {
      await api.delete(`/users/${userId}`)
      return userId
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Something went wrong.')
    }
  },
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false
        state.error = action.payload || 'Failed to fetch users'
      })
      // Create user
      .addCase(createUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false
        state.users.push(action.payload)
      })
      .addCase(createUser.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false
        state.error = action.payload || 'Failed to create user'
      })
      // Update user
      .addCase(updateUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false
        const index = state.users.findIndex((user) => user.id === action.payload.id)
        if (index !== -1) {
          state.users[index] = action.payload
        }
      })
      .addCase(updateUser.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false
        state.error = action.payload || 'Failed to update user'
      })
      // Delete user
      .addCase(deleteUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false
        state.users = state.users.filter((user) => user.id !== action.payload)
      })
      .addCase(deleteUser.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false
        state.error = action.payload || 'Failed to delete user'
      })
  },
})

export default usersSlice.reducer
