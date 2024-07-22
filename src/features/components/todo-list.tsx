import React from 'react'

import { useAppSelector } from '../../hooks/redux.ts'

import TodoItem from './todo-item.tsx'

const TodoList: React.FC = () => {
  // const todos = useSelector((state: RootState) => state.todos.todos)
  const todos = useAppSelector((state) => state.todos.todos)

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
