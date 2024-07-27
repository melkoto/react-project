import AddTodo from '../../components/todos/add-todo.tsx'
import TodoList from '../../components/todos/todo-list.tsx'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default Home
