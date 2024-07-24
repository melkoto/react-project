import { combineReducers } from '@reduxjs/toolkit'

import { userSlice } from '../features/reducers/user-slice'

export const rootReducer = combineReducers({
  [userSlice.reducerPath]: userSlice.reducer,
})
