import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ==============================================================================
//                                      TYPES
// ==============================================================================
type AuthState = {
    isAuthenticated: boolean; // Indicates if the user is authenticated
    isSessionExpired: boolean; // Indicates if the session has expired while using the app.
    isRefreshing: boolean; // Indicates if the access token is expired and token is being refreshing.
    accessToken: string | null; // Token for easy access anywhere in the app, the're not persisted and automatically cleared on app close, it's persisted in SecureStore
    refreshToken: string | null;
};

type LoginPayload = {
    accessToken: string;
    refreshToken: string;
};

// ==============================================================================
//                                      Slice
// ==============================================================================
// INITIAL STATE
const initialState: AuthState = {
    isAuthenticated: false,
    isSessionExpired: false,
    isRefreshing: false,
    accessToken: null,
    refreshToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = true;
            state.isSessionExpired = false;
        },
        setAccRefTokens(state, action: PayloadAction<LoginPayload>) {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        startRefreshing(state) {
            state.isRefreshing = true;
        },
        stopRefreshing(state) {
            state.isRefreshing = false;
        },

        logout(state) {
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
            state.isSessionExpired = false;
        },
        expireSession(state) {
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
            state.isSessionExpired = true;
        },
    },
});

export const { login, setAccRefTokens, startRefreshing, stopRefreshing, logout, expireSession } =
    authSlice.actions;
export default authSlice.reducer;
