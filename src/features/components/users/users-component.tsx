import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts'
import { User } from '../../../types/user.ts'
import { createUser, deleteUser, fetchUsers, updateUser } from '../../reducers/user-slice.ts'

const UsersComponent: React.FC = () => {
  const dispatch = useAppDispatch()
  const { users, loading, error } = useAppSelector((state) => state.users)

  const [newUser, setNewUser] = useState<Omit<User, 'id'>>({
    name: '',
    email: '',
  })

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const handleCreateUser = () => {
    dispatch(createUser(newUser as User))
      .unwrap()
      .then(() => {
        setNewUser({
          name: '',
          email: '',
        })
      })
  }

  const handleUpdateUser = (user: User) => {
    dispatch(
      updateUser({
        ...user,
        name: user.name + ' Updated',
      }),
    )
  }

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUser(id))
  }

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
            <button onClick={() => handleUpdateUser(user)} disabled={loading}>
              Update
            </button>
            <button onClick={() => handleDeleteUser(user.id)} disabled={loading}>
              Delete
            </button>
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
      <button onClick={handleCreateUser} disabled={loading}>
        Add User
      </button>
    </div>
  )
}

export default UsersComponent
