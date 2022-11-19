import axios from 'axios';
import {
    loginFailed,
    loginStart,
    loginSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
    logOutStart,
    logOutSuccess,
    logOutFailed,
} from './authSlice';
import {
    addToCartFailed,
    addToCartStart,
    addToCartSuccess,
    getUserCartFailed,
    getUserCartStart,
    getUserCartSuccess,
    logOutCart,
    removeCartProdFailed,
    removeCartProdStart,
    removeCartProdSuccess,
} from './cartSlice';
import { cateFailed, cateStart, cateSuccess } from './cateSlice';
import {
    createOrderFailed,
    createOrderStart,
    createOrderSuccess,
    getUserOrderFailed,
    getUserOrderStart,
    getUserOrderSuccess,
    logoutOrder,
    updateUserOrderFailed,
    updateUserOrderStart,
    updateUserOrderSuccess,
} from './orderSlice';
import { productFailed, productStart, productSuccess } from './productSlice';
import { updateInfoFailed, updateInfoStart, updateInfoSuccess } from './userSlice';

const BASE_URL = 'http://localhost:8000';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(BASE_URL + '/auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFailed());
        alert(error.response.data);
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post(BASE_URL + '/auth/register', user);
        dispatch(registerSuccess());
        navigate('/login');
    } catch (error) {
        dispatch(registerFailed());
        alert(error.response.data);
    }
};

export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
    dispatch(logOutStart());
    try {
        await axiosJWT.post(BASE_URL + '/auth/logout', id, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(logOutSuccess());
        dispatch(logOutCart());
        dispatch(logoutOrder());
        navigate('/');
    } catch (err) {
        dispatch(logOutFailed());
    }
};

export const updateInfo = async (dispatch, id, info, navigate, accessToken, axiosJWT) => {
    dispatch(updateInfoStart());
    try {
        await axiosJWT.put(BASE_URL + '/user/update/' + id, info, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(updateInfoSuccess());
        navigate('/login');
        alert(' Vui lòng đăng nhập lại để cập nhật thông tin ');
    } catch (error) {
        dispatch(updateInfoFailed());
    }
};

export const getCategory = async (dispatch) => {
    dispatch(cateStart());
    try {
        const res = await axios.get(BASE_URL + '/category');
        dispatch(cateSuccess(res.data));
    } catch (error) {
        dispatch(cateFailed());
    }
};

export const getDetailProduct = async (dispatch, prodID) => {
    dispatch(productStart());
    try {
        const res = await axios.get(BASE_URL + '/product/' + prodID);
        dispatch(productSuccess(res.data));
    } catch (error) {
        dispatch(productFailed());
    }
};

export const addToCart = async (dispatch, cart) => {
    dispatch(addToCartStart());
    try {
        const res = await axios.post(BASE_URL + '/cart/addtocart', cart);
        dispatch(addToCartSuccess(res.data));
    } catch (error) {
        dispatch(addToCartFailed());
    }
};

export const getUserCart = async (dispatch, userid) => {
    dispatch(getUserCartStart());
    try {
        const res = await axios.get(BASE_URL + `/cart/user-cart/${userid}`);
        dispatch(getUserCartSuccess(res.data));
    } catch (error) {
        dispatch(getUserCartFailed());
    }
};

export const removeCartProd = async (dispatch, userid, prodid) => {
    dispatch(removeCartProdStart());
    try {
        const res = await axios.put(BASE_URL + `/cart/removeitem?user=${userid}&prod=${prodid}`);
        dispatch(removeCartProdSuccess(res.data));
    } catch (error) {
        dispatch(removeCartProdFailed());
    }
};

export const createUserOrder = async (dispatch, order, navigate) => {
    dispatch(createOrderStart());
    try {
        const res = await axios.post(BASE_URL + '/order/createorder', order);
        dispatch(createOrderSuccess(res.data));
        navigate('/order-success');
    } catch (error) {
        dispatch(createOrderFailed());
    }
};

export const getUserOrder = async (dispatch, userid) => {
    dispatch(getUserOrderStart());
    try {
        const res = await axios.get(BASE_URL + '/order/userorder/' + userid);
        dispatch(getUserOrderSuccess(res.data));
    } catch (error) {
        dispatch(getUserOrderFailed());
    }
};

export const updateOrderStatus = async (dispatch, id, status, userid) => {
    dispatch(updateUserOrderStart());
    try {
        const res = await axios.put(BASE_URL + `/order/updatestatus?id=${id}&status=${status}&userid=${userid}`);
        dispatch(updateUserOrderSuccess(res.data));
    } catch (error) {
        dispatch(updateUserOrderFailed());
    }
};
