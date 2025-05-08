import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import themeReducer from './slice/themeSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    // Add other reducers here
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof rootReducer;
export default rootReducer;
