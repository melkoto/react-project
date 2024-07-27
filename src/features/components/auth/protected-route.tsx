import { ReactNode, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts'
import { useFetchUserQuery } from '../../reducers/auth-api-slice'
import { setLoading } from '../../reducers/auth-slice'

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
