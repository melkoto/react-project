import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../../hooks/redux'
import { useLogoutMutation } from '../../reducers/auth-api-slice'
import { clearUser } from '../../reducers/auth-slice'
import AddTodo from '../todos/add-todo'
import TodoList from '../todos/todo-list'

const Home = () => {
  const [logout] = useLogoutMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout().unwrap()
      dispatch(clearUser())
      navigate('/login')
    } catch (err) {
      console.error('Failed to logout:', err)
    }
  }

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default Home
