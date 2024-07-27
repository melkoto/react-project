import { combineReducers } from '@reduxjs/toolkit'

import { apiAuthSlice } from '../features/auth/auth-api-slice.ts'
import authReducer from '../features/auth/auth-slice.ts'
import { apiTodoSlice } from '../features/todo/todo-api-slice.ts'

export const rootReducer = combineReducers({
  [apiAuthSlice.reducerPath]: apiAuthSlice.reducer,
  [apiTodoSlice.reducerPath]: apiTodoSlice.reducer,
  auth: authReducer,
})
