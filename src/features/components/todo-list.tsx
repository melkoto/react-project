import React from 'react'

import { Todo } from '../../types/todo.ts'

import TodoItem from './todo-item.tsx'

const TodoList: React.FC = () => {
  // TODO: Получить массив через useSelector
  const todos: Todo[] = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
  ]

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
