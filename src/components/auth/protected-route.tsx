import { ReactNode, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { useFetchUserQuery } from '../../features/auth/auth-api-slice.ts'
import { setLoading } from '../../features/auth/auth-slice.ts'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const dispatch = useAppDispatch()
  const { user, loading } = useAppSelector((state) => state.auth)
  const { isLoading } = useFetchUserQuery()

  useEffect(() => {
    dispatch(setLoading(isLoading))
  }, [isLoading, dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/auth" />
  }

  return <>{children}</>
}

export default ProtectedRoute
