import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useFetchUserQuery } from '../../reducers/auth-api-slice'
import { setLoading } from '../../reducers/auth-slice'

const ProtectedRoutes = () => {
  const dispatch = useAppDispatch()
  const { user, loading } = useAppSelector((state) => state.auth)
  const { isLoading, isError } = useFetchUserQuery()

  useEffect(() => {
    dispatch(setLoading(isLoading))
  }, [isLoading, dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <Navigate to="/login" />
  }

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes
