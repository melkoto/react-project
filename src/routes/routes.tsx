import { ReactNode } from 'react'
import { Route } from 'react-router-dom'

import { LazyAuthPage, LazyLogin, LazyRegister, ProtectedRoute } from '../components/auth'
import { LazyHome } from '../pages/home'

interface RouteConfig {
  path: string
  element: ReactNode
  protected?: boolean
}

export const routes: RouteConfig[] = [
  { path: '/login', element: <LazyLogin /> },
  { path: '/register', element: <LazyRegister /> },
  { path: '/auth', element: <LazyAuthPage /> },
  { path: '/', element: <LazyHome />, protected: true },
]

export const generateRoutes = (routes: RouteConfig[]) => {
  return routes.map((route, index) =>
    route.protected ? (
      <Route key={index} path={route.path} element={<ProtectedRoute>{route.element}</ProtectedRoute>} />
    ) : (
      <Route key={index} path={route.path} element={route.element} />
    ),
  )
}
