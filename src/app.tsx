import { Suspense } from 'react'
import { Routes } from 'react-router-dom'

import Header from './components/header/header-component.tsx'
import { generateRoutes, routes } from './routes/routes'

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh' }}>
      <Header />
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>{generateRoutes(routes)}</Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App
