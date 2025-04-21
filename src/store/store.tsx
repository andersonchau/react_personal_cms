import { configureStore } from '@reduxjs/toolkit'
import { userSettingsSlice } from '../features/UserSettingsSlice';
import userSettingsReducer  from '../features/UserSettingsSlice';


export const globalStore = configureStore({
  reducer: {
    userSettings : userSettingsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof globalStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof globalStore.dispatch