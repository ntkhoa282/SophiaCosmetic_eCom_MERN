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
import { cateFailed, cateStart, cateSuccess } from './cateSlice';
import { productFailed, productStart, productSuccess } from './productSlice';
import { updateInfoFailed, updateInfoStart, updateInfoSuccess } from './userSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:8000/auth/login', user);
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
        await axios.post('http://localhost:8000/auth/register', user);
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
        await axiosJWT.post('http://localhost:8000/auth/logout', id, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(logOutSuccess());
        navigate('/');
    } catch (err) {
        dispatch(logOutFailed());
    }
};

export const updateInfo = async (dispatch, id, info, navigate, accessToken, axiosJWT) => {
    dispatch(updateInfoStart());
    try {
        await axiosJWT.put('http://localhost:8000/user/update/' + id, info, {
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
        const res = await axios.get('http://localhost:8000/category');
        dispatch(cateSuccess(res.data));
    } catch (error) {
        dispatch(cateFailed());
    }
};

export const getDetailProduct = async (dispatch, prodID) => {
    dispatch(productStart());
    try {
        const res = await axios.get('http://localhost:8000/product/' + prodID);
        dispatch(productSuccess(res.data));
    } catch (error) {
        dispatch(productFailed());
    }
};
