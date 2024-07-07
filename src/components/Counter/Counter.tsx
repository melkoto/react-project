import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts'

import { decrement, getCounterValue, increment } from './store'

const Counter = () => {
  const value = useAppSelector(getCounterValue)
  const dispatch = useAppDispatch()

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(increment())
  }

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(decrement())
  }

  return (
    <div>
      <h1>Counter</h1>
      <div>{value}</div>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter
