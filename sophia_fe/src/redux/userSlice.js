import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        info: {
            currentUser: null,
            isFetching: false,
            error: false,
        },
    },
    reducers: {
        updateInfoStart: (state) => {
            state.info.isFetching = true;
        },
        updateInfoSuccess: (state, action) => {
            state.info.currentUser = action.payload;
            state.info.isFetching = false;
            state.info.error = false;
        },
        updateInfoFailed: (state) => {
            state.info.isFetching = false;
            state.info.error = true;
        },
    },
});

export const { updateInfoStart, updateInfoSuccess, updateInfoFailed } = userSlice.actions;

export default userSlice.reducer;
