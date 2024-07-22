import React, { useState } from 'react'

import { useAppDispatch } from '../../hooks/redux.ts'
import { Todo } from '../../types/todo.ts'
import { deleteTodo, editTodo, toggleTodo } from '../reducers/todo-slice.ts'

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)

  const dispatch = useAppDispatch()

  const handleUpdate = () => {
    dispatch(editTodo({ id: todo.id, title: editTitle }))
    setIsEditing(false)
  }

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
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
      <button onClick={handleToggle} style={{ marginRight: '10px', backgroundColor: 'green', color: 'white' }}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
