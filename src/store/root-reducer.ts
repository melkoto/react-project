import { combineReducers } from '@reduxjs/toolkit'

import userReducer from '../features/reducers/user-slice.ts'

export const rootReducer = combineReducers({
  users: userReducer,
})
