import { useNavigate } from 'react-router-dom'

const AuthPage = () => {
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  return (
    <div>
      <h1>Welcome, please log in or register</h1>
      <button onClick={() => handleNavigate('/login')}>Login</button>
      <button onClick={() => handleNavigate('/register')}>Register</button>
    </div>
  )
}

export default AuthPage
