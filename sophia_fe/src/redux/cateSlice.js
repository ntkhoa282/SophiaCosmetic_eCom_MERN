import { createSlice } from '@reduxjs/toolkit';

const cateSlice = createSlice({
    name: 'category',
    initialState: {
        category: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        cateStart: (state) => {
            state.isFetching = true;
        },
        cateSuccess: (state, action) => {
            state.isFetching = false;
            state.category = action.payload;
            state.error = false;
        },
        cateFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { cateStart, cateSuccess, cateFailed } = cateSlice.actions;

export default cateSlice.reducer;
