import { apiAuthSlice } from '../features/reducers/auth-api-slice.ts'
import { apiTodoSlice } from '../features/reducers/todo-api-slice.ts'

export const middlewares = [apiAuthSlice.middleware, apiTodoSlice.middleware]
