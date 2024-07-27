import { lazy } from 'react'

import AuthPage from './auth-page-component.tsx'
import Login from './login-component.tsx'
import Register from './register-component.tsx'

export const LazyLogin = lazy(() => import('./login-component'))
export const LazyRegister = lazy(() => import('./register-component'))
export const LazyAuthPage = lazy(() => import('./auth-page-component'))
export { default as ProtectedRoute } from './protected-route'

export { AuthPage, Login, Register }
