import { createContext, Dispatch, ReactNode, useReducer } from 'react'

import { todoReducer } from '../reducers/todoReducer'
import { Action, TodoState } from '../types/todo'

const initialState: TodoState = {
  todos: [],
}

interface TodoContextProps {
  state: TodoState
  dispatch: Dispatch<Action>
}

export const TodoContext = createContext<TodoContextProps | undefined>(undefined)

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>
}
