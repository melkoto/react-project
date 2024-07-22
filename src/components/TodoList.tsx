import React from 'react'
import { nanoid } from '@reduxjs/toolkit'

import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
  return (
    <div>
      // TODO: Получить массив через useSelector
      {[].map((todo) => (
        <TodoItem key={nanoid()} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
