import { ICounterState } from './counter-slice'

export const getCounterValue = (state: { counter: ICounterState }) => state.counter.value
