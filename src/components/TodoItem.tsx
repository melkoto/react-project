import { FC, memo, useCallback, useState } from 'react'

import { useTodo } from '../hooks/useTodo'
import { Todo } from '../types/todo'

import styles from './TodoItem.module.css'

interface TodoItemProps {
  todo: Todo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { dispatch } = useTodo()
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todo.text)

  const handleEdit = useCallback(() => {
    if (isEditing && newText.trim()) {
      dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, text: newText } })
    }
    setIsEditing(!isEditing)
  }, [isEditing, newText, dispatch, todo.id])

  const handleToggle = useCallback(() => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
  }, [dispatch, todo.id])

  const handleRemove = useCallback(() => {
    dispatch({ type: 'REMOVE_TODO', payload: todo.id })
  }, [dispatch, todo.id])

  return (
    <div className={styles.container}>
      {isEditing ? (
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} className={styles.input} />
      ) : (
        <span className={`${styles.text} ${todo.completed ? styles.completed : ''}`} onClick={handleToggle}>
          {todo.text}
        </span>
      )}
      <button onClick={handleEdit} className={styles.button}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={handleRemove} className={styles.button}>
        Remove
      </button>
    </div>
  )
}

export default memo(TodoItem)
