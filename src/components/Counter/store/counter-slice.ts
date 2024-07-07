import { createSlice } from '@reduxjs/toolkit'

export interface ICounterState {
  value: number
}

const initialState: ICounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
    },
    decrement(state) {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = counterSlice.actions
export const counterReducer = counterSlice.reducer
