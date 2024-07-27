import { combineReducers } from '@reduxjs/toolkit'

import { apiAuthSlice } from '../features/reducers/auth-api-slice.ts'
import authReducer from '../features/reducers/auth-slice.ts'
import { todoApiSlice } from '../features/reducers/todo-api-slice.ts'

export const rootReducer = combineReducers({
  [apiAuthSlice.reducerPath]: apiAuthSlice.reducer,
  [todoApiSlice.reducerPath]: todoApiSlice.reducer,
  auth: authReducer,
})
