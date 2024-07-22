import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './root-reducer.ts'

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
