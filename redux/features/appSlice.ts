import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// This slice is persited and stores the inforamtion related to the app.
// Like if the app is installed first time so show user the intro screen.
// Or If user don't wanted to see any info, intro or any other thing related to app.
// ==============================================================================
//                                      TYPES
// ==============================================================================

type AppStateType = {
    isFreshStart: boolean;
};

// ==============================================================================
//                                      Slice
// ==============================================================================
const initialState: AppStateType = {
    isFreshStart: true,
};
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setFreshStart(state, action: PayloadAction<boolean>) {
            state.isFreshStart = action.payload;
        },
    },
});
export const { setFreshStart } = appSlice.actions;
export default appSlice.reducer;
