import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        prodmanage: {
            prods: [],
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
    },
});

export const { adGetProdsStart, adGetProdsSuccess, adGetProdsFailed } = adminSlice.actions;

export default adminSlice.reducer;
