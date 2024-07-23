import React, { useState } from 'react'

import { User } from '../../../types/user.ts'

const UsersComponent: React.FC = () => {
  const [newUser, setNewUser] = useState<Omit<User, 'id'>>({
    name: '',
    email: '',
  })

  // TODO: Replace with real data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@doe.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@doe.com' },
  ]
  const loading = true
  const error = null

  return (
    <div>
      <h1>User List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button disabled={loading}>Update</button>
            <button disabled={loading}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add New User</h2>
      <input
        type="text"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        placeholder="Email"
      />
      <button disabled={loading}>Add User</button>
    </div>
  )
}

export default UsersComponent
