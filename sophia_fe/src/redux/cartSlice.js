import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        userID: null,
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        addToCartStart: (state) => {
            state.isFetching = true;
        },
        addToCartSuccess: (state, action) => {
            state.isFetching = false;
            state.userID = action.payload?.userID;
            state.products = action.payload?.products;
            state.error = false;
        },
        addToCartFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        getUserCartStart: (state) => {
            state.isFetching = true;
        },
        getUserCartSuccess: (state, action) => {
            state.isFetching = false;
            state.userID = action.payload?.userID;
            state.products = action.payload?.products;
            state.error = false;
        },
        getUserCartFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        removeCartProdStart: (state) => {
            state.isFetching = true;
        },
        removeCartProdSuccess: (state, action) => {
            state.isFetching = false;
            state.userID = action.payload?.userID;
            state.products = action.payload?.products;
            state.error = false;
        },
        removeCartProdFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logOutCart: (state, action) => {
            state.isFetching = false;
            state.userID = null;
            state.products = [];
            state.error = false;
        },
    },
});

export const {
    getUserCartStart,
    getUserCartSuccess,
    getUserCartFailed,
    logOutCart,
    removeCartProdStart,
    removeCartProdSuccess,
    removeCartProdFailed,
    addToCartStart,
    addToCartSuccess,
    addToCartFailed,
} = cartSlice.actions;

export default cartSlice.reducer;
