import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

import { Todo, TodoState } from '../../types/todo.ts'

const initialState: TodoState = {
  todos: [],
}

// createAsyncThunk

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      const newTodo: Todo = {
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      }
      state.todos.push(newTodo)
    },
    // addTodo: {
    //   reducer: (state, action: PayloadAction<Todo>) => {
    //     state.todos.push(action.payload)
    //   },
    //   prepare: (title: string) => ({
    //     payload: {
    //       id: nanoid(),
    //       title,
    //       completed: false,
    //     },
    //   }),
    // },
    editTodo: (state, action: PayloadAction<{ title: string; id: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id)

      if (todo) {
        todo.title = action.payload.title
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)

      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})

export const { addTodo, editTodo, toggleTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer

// ADD_TODO, payload: text
// EDIT_TODO, payload: id, text
// DELETE_TODO, payload: id
// TOGGLE_TODO, payload: id
