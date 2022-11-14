import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        createOrderStart: (state) => {
            state.isFetching = true;
        },
        createOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.order = action.payload;
            state.error = false;
        },
        createOrderFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutOrder: (state) => {
            state.isFetching = false;
            state.order = null;
            state.error = false;
        },
    },
});

export const { createOrderStart, createOrderSuccess, createOrderFailed, logoutOrder } = orderSlice.actions;

export default orderSlice.reducer;
