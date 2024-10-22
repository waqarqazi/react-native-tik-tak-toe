import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import persistedReducer from './authSlice'
import gameReducer from './gameSlice'

const store = configureStore({
  reducer: {
    auth: persistedReducer, // Persisted auth reducer
    game: gameReducer, // Game slice reducer
  },
  // Optionally add custom middleware here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable if you're persisting non-serializable data like Dates
    }),
})

export const persistor = persistStore(store)
export default store
