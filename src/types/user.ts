export interface User {
  id: number
  name: string
  email: string
}

export interface UsersState {
  users: User[]
  loading: boolean
  error: string | null
}
