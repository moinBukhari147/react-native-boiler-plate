import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';
import rootReducer from './rootReducer';
import { apiSlice } from './services/apiSlice/apiSlice';

const persistedReducer = persistReducer(persistConfig, rootReducer);

// CONFIGURE STORE
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // required for redux-persist
        }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
