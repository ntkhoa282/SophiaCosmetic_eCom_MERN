import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        prodmanage: {
            prods: [],
            isFetching: false,
            error: false,
        },
        ordermanage: {
            detail: {},
            isFetching: false,
            error: false,
        },
        receivemanage: {
            detail: {},
            isFetching: false,
            error: false,
        },
    },
    reducers: {
        adGetProdsStart: (state) => {
            state.prodmanage.isFetching = true;
        },
        adGetProdsSuccess: (state, action) => {
            state.prodmanage.isFetching = false;
            state.prodmanage.error = false;
            state.prodmanage.prods = action.payload;
        },
        adGetProdsFailed: (state) => {
            state.prodmanage.isFetching = false;
            state.prodmanage.error = true;
        },
        adGetOrderDetailStart: (state) => {
            state.ordermanage.isFetching = true;
        },
        adGetOrderDetailSuccess: (state, action) => {
            state.ordermanage.isFetching = false;
            state.ordermanage.detail = action.payload;
            state.ordermanage.error = false;
        },
        adGetOrderDetailFailed: (state) => {
            state.ordermanage.isFetching = false;
            state.ordermanage.error = true;
        },
        adUpdateStatusStart: (state) => {
            state.ordermanage.isFetching = true;
        },
        adUpdateStatusSuccess: (state, action) => {
            state.ordermanage.isFetching = false;
            state.ordermanage.detail = action.payload;
            state.ordermanage.error = false;
        },
        adUpdateStatusFailed: (state) => {
            state.ordermanage.isFetching = false;
            state.ordermanage.error = true;
        },
        adGetReceiveDetailStart: (state) => {
            state.receivemanage.isFetching = true;
        },
        adGetReceiveDetailSuccess: (state, action) => {
            state.receivemanage.isFetching = false;
            state.receivemanage.detail = action.payload;
            state.receivemanage.error = false;
        },
        adGetReceiveDetailFailed: (state) => {
            state.receivemanage.isFetching = false;
            state.receivemanage.error = true;
        },
    },
});

export const {
    adGetProdsStart,
    adGetProdsSuccess,
    adGetProdsFailed,
    adGetOrderDetailStart,
    adGetOrderDetailSuccess,
    adGetOrderDetailFailed,
    adUpdateStatusStart,
    adUpdateStatusSuccess,
    adUpdateStatusFailed,
    adGetReceiveDetailStart,
    adGetReceiveDetailSuccess,
    adGetReceiveDetailFailed,
} = adminSlice.actions;

export default adminSlice.reducer;
