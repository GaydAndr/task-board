import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import uiSlice from "./ui/ui_slice.ts";


const persistUiConfig = {
  key: 'ui',
  storage,
  // whitelist: ['titleInput', 'sprintForm']
}

const UiReducer = persistReducer(persistUiConfig, uiSlice.reducer);
export const store = configureStore({
  reducer: {
    ui: UiReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

let persistor=persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export {persistor}