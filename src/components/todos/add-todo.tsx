import { FormEvent, useState } from 'react'

import { useAddTodoMutation } from '../../features/todo/todo-api-slice.ts'
import { useAppSelector } from '../../hooks/redux.ts'

const AddTodo = () => {
  const [title, setTitle] = useState('')
  const [addTodo, { isLoading: isAdding }] = useAddTodoMutation()
  const user = useAppSelector((state) => state.auth.user)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (title.trim() && user) {
      try {
        await addTodo({ title, userId: user.id }).unwrap()
        setTitle('')
      } catch (error) {
        console.error('Failed to add todo: ', error)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        style={{ marginRight: '10px' }}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit" style={{ background: 'blue', color: 'white' }} disabled={isAdding}>
        Add Todo
      </button>
      {isAdding && <p>Adding todo...</p>}
    </form>
  )
}

export default AddTodo
