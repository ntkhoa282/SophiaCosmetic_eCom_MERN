import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: null,
        ordersList: [],
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
        getUserOrderStart: (state) => {
            state.isFetching = true;
        },
        getUserOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.ordersList = action.payload;
            state.error = false;
        },
        getUserOrderFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        updateUserOrderStart: (state) => {
            state.isFetching = true;
        },
        updateUserOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.ordersList = action.payload;
            state.error = false;
        },
        updateUserOrderFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutOrder: (state) => {
            state.isFetching = false;
            state.order = null;
            state.ordersList = [];
            state.error = false;
        },
    },
});

export const {
    createOrderStart,
    createOrderSuccess,
    createOrderFailed,
    logoutOrder,
    getUserOrderStart,
    getUserOrderSuccess,
    getUserOrderFailed,
    updateUserOrderStart,
    updateUserOrderSuccess,
    updateUserOrderFailed,
} = orderSlice.actions;

export default orderSlice.reducer;
