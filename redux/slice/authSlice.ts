import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// TYPE
type AuthState = {
    isAuthenticated: boolean;
    isLoading: boolean;
    token: string | null;
};

// INITIAL STATE
const initialState: AuthState = {
    isAuthenticated: false,
    isLoading: false,
    token: null,
};

// SLICE
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<string>) {
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
