import React, { FormEvent, useState } from 'react'

import { useAppDispatch } from '../../hooks/redux.ts'
import { addTodo } from '../reducers/todo-slice.ts'

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState('')
  const dispatch = useAppDispatch()

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTodo({ title }))
    setTitle('')
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input
        style={{ marginRight: '10px' }}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit" style={{ background: 'blue', color: 'white' }}>
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
