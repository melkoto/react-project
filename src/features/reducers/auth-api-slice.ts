import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { User } from '../../types/user.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: 'include',
})

export const apiAuthSlice = createApi({
  reducerPath: 'apiAuth',
  baseQuery,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: '/auth/register',
        method: 'POST',
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
    fetchUser: builder.query<User, void>({
      query: () => '/auth/me',
    }),
  }),
})

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useFetchUserQuery } = apiAuthSlice
