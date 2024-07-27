import { Route, Routes } from 'react-router-dom'

import Login from './features/components/auth/login-component'
import ProtectedRoutes from './features/components/auth/protected-routes'
import Register from './features/components/auth/register-component'
import Home from './features/components/home/home-component'

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
