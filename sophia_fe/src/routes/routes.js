import ProductPage from '~/pages/ProdCate/ProductPage';
import AboutPage from '~/pages/About/AboutPage';
import HomePage from '~/pages/Home/HomePage';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import MyOrderPage from '~/pages/MyOrderPage';
import OrderPage from '~/pages/OrderPage/OrderPage';
import CartPage from '~/pages/CartPage/CartPage';
import Profile from '~/pages/Profile/Profile';
import DetailPage from '~/pages/Detail/Detail';

const publicRoutes = [
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/login', element: <Login />, layout: null },
    { path: '/register', element: <Register />, layout: null },
    { path: '/:category', element: <ProductPage /> },
    { path: '/:category/:prodslug', element: <DetailPage /> },
];

const privateRoutes = [
    { path: '/my-order', element: <MyOrderPage /> },
    { path: '/order', element: <OrderPage /> },
    { path: '/my-cart', element: <CartPage /> },
    { path: '/profile', element: <Profile /> },
];

export { publicRoutes, privateRoutes };
