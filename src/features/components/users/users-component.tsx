import React, { useState } from 'react'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { User } from '../../../types/user'
import {
  useAddUserMutation,
  useDeleteUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
} from '../../reducers/user-slice'

const UsersComponent: React.FC = () => {
  const [newUser, setNewUser] = useState<Omit<User, 'id'>>({
    name: '',
    email: '',
  })

  const { data: users, error: usersError, isLoading: isUsersLoading } = useGetUsersQuery()
  const [addUser, { isLoading: isAdding }] = useAddUserMutation()
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation()
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation()

  const handleAddUser = async () => {
    try {
      await addUser(newUser).unwrap()
      setNewUser({ name: '', email: '' })
    } catch (error) {
      console.error('Failed to add user: ', error)
    }
  }

  const handleUpdateUser = async (id: number) => {
    try {
      await updateUser({ id, name: `Updated ${newUser.name}`, email: newUser.email }).unwrap()
    } catch (error) {
      console.error('Failed to update user: ', error)
    }
  }

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id).unwrap()
    } catch (error) {
      console.error('Failed to delete user: ', error)
    }
  }

  const renderError = (error: FetchBaseQueryError | SerializedError) => {
    if ('status' in error) {
      return (
        <p>
          Error: {error.status} - {JSON.stringify(error.data)}
        </p>
      )
    }
    return <p>{error.message}</p>
  }

  return (
    <div>
      <h1>User List</h1>
      {isUsersLoading && <p>Loading...</p>}
      {usersError && renderError(usersError)}
      <ul>
        {users?.map((user: User) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={() => handleUpdateUser(user.id)} disabled={isUpdating}>
              Update
            </button>
            <button onClick={() => handleDeleteUser(user.id)} disabled={isDeleting}>
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
      <button onClick={handleAddUser} disabled={isAdding}>
        Add User
      </button>
      {isAdding && <p>Adding user...</p>}
    </div>
  )
}

export default UsersComponent
