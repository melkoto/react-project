import { configureStore } from '@reduxjs/toolkit'

import { userSlice } from '../features/reducers/user-slice.ts'

import { rootReducer } from './root-reducer.ts'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
