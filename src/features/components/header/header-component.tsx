import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useLogoutMutation } from '../../reducers/auth-api-slice'
import { clearUser } from '../../reducers/auth-slice'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)
  const [logout] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      await logout().unwrap()
      dispatch(clearUser())
      navigate('/auth')
    } catch (err) {
      console.error('Failed to logout:', err)
    }
  }

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#ccc' }}>
      <nav>
        {!user ? (
          <>
            <button onClick={() => navigate('/login')} style={{ marginRight: '10px' }}>
              Login
            </button>
            <button onClick={() => navigate('/register')}>Register</button>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </nav>
    </header>
  )
}

export default Header
