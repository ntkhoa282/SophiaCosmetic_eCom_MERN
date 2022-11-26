import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import cateReducer from './cateSlice';
import prodReducer from './productSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';
import adminReducer from './adminSlice';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: cateReducer,
    product: prodReducer,
    cart: cartReducer,
    order: orderReducer,
    admin: adminReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);
