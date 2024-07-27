import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useLoginMutation } from '../../features/auth/auth-api-slice.ts'
import { setUser } from '../../features/auth/auth-slice.ts'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [login] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const user = await login(formData).unwrap()
      dispatch(setUser(user))
      navigate('/')
    } catch (err) {
      console.error('Failed to login:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
