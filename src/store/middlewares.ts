import { apiAuthSlice } from '../features/reducers/auth-api-slice.ts'
import { todoApiSlice } from '../features/reducers/todo-api-slice.ts'

export const middlewares = [apiAuthSlice.middleware, todoApiSlice.middleware]
