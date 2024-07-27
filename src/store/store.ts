import { configureStore } from '@reduxjs/toolkit'

import { middlewares } from './middlewares.ts'
import { rootReducer } from './root-reducer.ts'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
