import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';
import authReducer from './features/authSlice';
import loaderReducer from './features/loaderSlice';
import themeReducer from './features/themeSlice';
import { apiSlice } from './services/apiSlice/apiSlice';

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    loader: loaderReducer,
    theme: themeReducer,
    // SERVICES
    api: apiSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof rootReducer;
export default rootReducer;
