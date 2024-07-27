import { apiAuthSlice } from '../features/reducers/auth-api-slice.ts'
import { userSlice } from '../features/reducers/user-slice.ts'

export const middlewares = [userSlice.middleware, apiAuthSlice.middleware]
