import { lazy } from 'react'

export const LazyLogin = lazy(() => import('./login-component'))
export const LazyRegister = lazy(() => import('./register-component'))
export const LazyAuthPage = lazy(() => import('./auth-page-component'))

export { default as ProtectedRoute } from './protected-route'
