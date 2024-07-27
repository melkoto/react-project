import { FormEvent, useState } from 'react'

import { useAddTodoMutation } from '../../reducers/todo-api-slice'

const AddTodo = () => {
  const [title, setTitle] = useState('')
  const [addTodo] = useAddTodoMutation()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      await addTodo({ title }).unwrap()
      setTitle('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
