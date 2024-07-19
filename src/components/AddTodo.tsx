import { memo, useCallback, useState } from 'react'

import { useTodo } from '../hooks/useTodo'

import styles from './AddTodo.module.css'

const AddTodo = () => {
  const [text, setText] = useState('')
  const { dispatch } = useTodo()

  const handleAddTodo = useCallback(() => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text })
      setText('')
    }
  }, [text, dispatch])

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
        className={styles.input}
      />
      <button onClick={handleAddTodo} className={styles.button}>
        Add
      </button>
    </div>
  )
}

export default memo(AddTodo)
