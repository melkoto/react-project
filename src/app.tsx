import UsersComponent from './features/components/users/users-component.tsx'

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <div>
        <h1>Todo App</h1>
        <UsersComponent />
      </div>
    </div>
  )
}

export default App
