import { Route, Routes } from 'react-router-dom'

import AuthPage from './features/components/auth/auth-page-component'
import Login from './features/components/auth/login-component'
import ProtectedRoute from './features/components/auth/protected-route'
import Register from './features/components/auth/register-component'
import Header from './features/components/header/header-component.tsx'
import Home from './features/components/home/home-component'

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh' }}>
      <Header />
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
