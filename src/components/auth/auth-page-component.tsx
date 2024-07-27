import { useNavigate } from 'react-router-dom'

const AuthPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome, please log in or register</h1>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  )
}

export default AuthPage
