import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        detail: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        productStart: (state) => {
            state.isFetching = true;
        },
        productSuccess: (state, action) => {
            state.isFetching = false;
            state.detail = action.payload;
            state.error = false;
        },
        productFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { productStart, productSuccess, productFailed } = productSlice.actions;

export default productSlice.reducer;
