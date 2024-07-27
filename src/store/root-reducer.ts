import { combineReducers } from '@reduxjs/toolkit'

import { apiAuthSlice } from '../features/reducers/auth-api-slice.ts'
import authReducer from '../features/reducers/auth-slice.ts'
import { userSlice } from '../features/reducers/user-slice'

export const rootReducer = combineReducers({
  [userSlice.reducerPath]: userSlice.reducer,
  [apiAuthSlice.reducerPath]: apiAuthSlice.reducer,
  auth: authReducer,
})
