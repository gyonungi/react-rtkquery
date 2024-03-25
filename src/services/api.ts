import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Generates react hooks for endpoints
export const postApi = createApi({
	reducerPath: 'post',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/',
	}),
	endpoints: builder => ({
		getAllPosts: builder.query({
			query: ({ limit = 5, start = 1 }) => ({
				url: '/posts',
				params: {
					_limit: limit,
					_start: start,
				},
			}),
		}),
		getPostsId: builder.query({
			query: post => `posts/${post}`,
		}),
	}),
})

// Export endpoints as hooks
export const { useGetAllPostsQuery, useGetPostsIdQuery } = postApi
