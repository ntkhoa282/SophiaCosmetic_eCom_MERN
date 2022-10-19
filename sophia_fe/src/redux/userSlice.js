import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        info: {
            infoUser: null,
            isFetching: false,
            error: false,
        },
    },
    reducers: {
        updateInfoStart: (state) => {
            state.info.isFetching = true;
        },
        updateInfoSuccess: (state, action) => {
            state.info.isFetching = false;
            state.info.infoUser = action.payload;
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
