import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './features/components/auth/login-component'
import ProtectedRoute from './features/components/auth/protected-route'
import Register from './features/components/auth/register-component'
import Home from './features/components/home/home-component'

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
