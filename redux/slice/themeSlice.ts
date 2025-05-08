import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// TYPE
type ThemeState = {
    appTheme: 'light' | 'dark' | 'system';
    appliedTheme: 'dark' | 'light';
};

// INITIAL STATE
const initialState: ThemeState = {
    appTheme: 'system',
    appliedTheme: 'dark',
};

// SLICE
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setAppTheme(state, action: PayloadAction<ThemeState['appTheme']>) {
            state.appTheme = action.payload;
        },
        setAppliedTheme(state, action: PayloadAction<ThemeState['appliedTheme']>) {
            state.appliedTheme = action.payload;
        },
    },
});

export const { setAppTheme, setAppliedTheme } = themeSlice.actions;
export default themeSlice.reducer;
