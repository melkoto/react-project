import AddTodo from '../todos/add-todo'
import TodoList from '../todos/todo-list'

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
