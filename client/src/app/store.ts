import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/auth/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Seul le reducer auth sera persisté
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactive le check de sérialisation pour redux-persist
    }),
});

export const persistor = persistStore(store);

// Export du type RootState pour l'utiliser dans les composants
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
