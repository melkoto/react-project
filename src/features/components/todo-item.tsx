import React, { useState } from 'react'

import { Todo } from '../../types/todo.ts'

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)

  const handleUpdate = () => {
    setIsEditing(false)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
        />
      ) : (
        <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginRight: '10px' }}
          onDoubleClick={() => !todo.completed && setIsEditing(true)}
        >
          {todo.title}
        </span>
      )}
      <button style={{ marginRight: '10px', backgroundColor: 'green', color: 'white' }}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
    </div>
  )
}

export default TodoItem
