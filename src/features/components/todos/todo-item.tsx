import { useState } from 'react'

import { Todo } from '../../../types/todo'
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../../reducers/todo-api-slice'

interface TodoItemProps {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()

  const handleUpdate = async () => {
    if (editTitle.trim() && editTitle !== todo.title) {
      await updateTodo({
        id: todo.id,
        title: editTitle,
      }).unwrap()
    }
    setIsEditing(false)
  }

  const handleDelete = async () => {
    await deleteTodo(todo.id).unwrap()
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
      <button
        style={{ marginRight: '10px', backgroundColor: 'green', color: 'white' }}
        onClick={async () => {
          await updateTodo({ id: todo.id, completed: !todo.completed })
        }}
      >
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button style={{ backgroundColor: 'red', color: 'white' }} onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
