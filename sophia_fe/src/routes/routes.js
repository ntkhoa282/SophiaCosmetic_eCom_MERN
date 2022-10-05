import ProductPage from '~/pages/ProductPage';
import AboutPage from '~/pages/About/AboutPage';
import HomePage from '~/pages/HomePage';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import OrderPage from '~/pages/OrderPage';
import CartPage from '~/pages/CartPage';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/login', element: <Login />, layout: null },
    { path: '/register', element: <Register />, layout: null },
    { path: '/product', element: <ProductPage /> },
];

const privateRoutes = [
    { path: '/my-order', element: <OrderPage /> },
    { path: '/my-cart', element: <CartPage /> },
    { path: '/profile', element: <Profile /> },
];

export { publicRoutes, privateRoutes };
