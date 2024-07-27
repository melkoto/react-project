import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../../hooks/redux.ts'
import { useLogoutMutation } from '../../reducers/auth-api-slice.ts'
import { clearUser } from '../../reducers/auth-slice.ts'
import UsersComponent from '../users/users-component'

const Home: React.FC = () => {
  const [logout] = useLogoutMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout().unwrap()
      dispatch(clearUser())
      navigate('/login')
    } catch (err) {
      console.error('Failed to logout:', err)
    }
  }

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <UsersComponent />
    </div>
  )
}

export default Home
