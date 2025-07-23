import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ==============================================================================
//                                      TYPES
// ==============================================================================
type ThemeState = {
    appTheme: 'light' | 'dark' | 'system';
    appliedTheme: 'dark' | 'light';
};

// This manages the theme of the app.
// This is persisted slice and by default it adopts the system theme.
// ==============================================================================
//                                      Slice
// ==============================================================================
// INITIAL STATE
const initialState: ThemeState = {
    appTheme: 'system',
    appliedTheme: 'dark',
};

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
