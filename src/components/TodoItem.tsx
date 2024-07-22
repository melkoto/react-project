import React, { useState } from 'react'

import { Todo } from '../types/todo.ts'

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)

  return (
    <div>
      {isEditing ? (
        <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
      ) : (
        <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.title}
        </span>
      )}
      <button>{todo.completed ? 'Undo' : 'Complete'}</button>
      <button>Delete</button>
    </div>
  )
}

export default TodoItem
