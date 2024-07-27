import { Todo } from '../../../types/todo'
import { useGetTodosQuery } from '../../reducers/todo-api-slice'

import TodoItem from './todo-item'

const TodoList = () => {
  const { data: todos, error, isLoading } = useGetTodosQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    const errorMessage =
      'status' in error && error.status === 'FETCH_ERROR'
        ? 'Network error'
        : 'status' in error && error.status === 'PARSING_ERROR'
          ? 'Data parsing error'
          : 'data' in error && typeof error.data === 'object' && error.data !== null && 'message' in error.data
            ? (error.data as { message: string }).message
            : 'An unknown error occurred'

    return <div>Error: {errorMessage}</div>
  }

  return <div>{todos?.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}</div>
}

export default TodoList
