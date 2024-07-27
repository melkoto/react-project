import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  // ! TODO: change to real user
  const user = null

  const handleLogout = async () => {
    console.log('handleLogout')
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
