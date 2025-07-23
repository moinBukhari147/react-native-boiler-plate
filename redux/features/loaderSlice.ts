import { createSlice } from '@reduxjs/toolkit';

// ==============================================================================
//                                      TYPES
// ==============================================================================
type LoaderStateType = {
    appLoading: boolean;
};

// This slice is used to manage the loading state of the app.
// Toggle this any where from the app to show or hide the loader.
// ==============================================================================
//                                      Slice
// ==============================================================================
const initialState: LoaderStateType = {
    appLoading: false,
};
const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        showAppLoader(state) {
            state.appLoading = true;
        },
        hideAppLoader(state) {
            state.appLoading = false;
        },
    },
});
export const { showAppLoader, hideAppLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
