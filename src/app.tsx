import AddTodo from './features/components/add-todo.tsx'
import TodoList from './features/components/todo-list.tsx'

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <div>
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  )
}

export default App
