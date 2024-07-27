import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: 'include',
})

export const apiAuthSlice = createApi({
  reducerPath: 'apiAuth',
  baseQuery,
  tagTypes: ['User', 'Todos'],
  endpoints: () => ({}),
})

// eslint-disable-next-line no-empty-pattern
export const {} = apiAuthSlice
