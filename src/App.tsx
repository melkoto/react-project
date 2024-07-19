import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { TodoProvider } from './context/TodoContext'

import styles from './App.module.css'

const App = () => {
  return (
    <TodoProvider>
      <div className={styles.container}>
        <h1 className={styles.title}>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App
