import { combineReducers } from '@reduxjs/toolkit'

import todoReducer from '../features/reducers/todo-slice.ts'

export const rootReducer = combineReducers({
  todos: todoReducer,
})
