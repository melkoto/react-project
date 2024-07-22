import React, { useState } from 'react'

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState('')

  return (
    <form>
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
