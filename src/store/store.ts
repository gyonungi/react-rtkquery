import { configureStore } from '@reduxjs/toolkit'
import { postApi } from '../services/api'

export const store = configureStore({
	reducer: {
		[postApi.reducerPath]: postApi.reducer,
	},

	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(postApi.middleware)
	},
})

export type RootState = ReturnType<typeof store.getState>
