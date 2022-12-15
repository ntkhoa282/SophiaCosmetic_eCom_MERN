import ProductPage from '~/pages/ProdCate/ProductPage';
import AboutPage from '~/pages/About/AboutPage';
import HomePage from '~/pages/Home/HomePage';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import MyOrderPage from '~/pages/MyOrder/MyOrder';
import OrderPage from '~/pages/OrderPage/OrderPage';
import CartPage from '~/pages/CartPage/CartPage';
import Profile from '~/pages/Profile/Profile';
import DetailPage from '~/pages/Detail/Detail';
import OrderSuccess from '~/pages/OrderSuccess/success';
import AdminPage from '~/pages-admin/main-admin/AdminPage';
import AddProduct from '~/pages-admin/AddProduct-admin/AddProduct';
import ProductsManage from '~/pages-admin/ProductsManage-admin/ProductsManage';
import UpdateProduct from '~/pages-admin/ProductsManage-admin/UpdateProduct/UpdateProduct';
import OrdersManage from '~/pages-admin/OrdersManage-admin/OrdersManage';
import OrderDetail from '~/pages-admin/OrdersManage-admin/OrderDetail-admin/OrderDetail';
import IncomeStats from '~/pages-admin/Stats-admin/IncomeStats/IncomeStats';
import ReceiveManage from '~/pages-admin/ReceiveManage-admin/ReceiveManage';
import AddReceive from '~/pages-admin/ReceiveManage-admin/AddReceive/AddReceive';

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
    { path: '/order-success', element: <OrderSuccess /> },
];

const adminRoutes = [
    { path: '/admin', element: <AdminPage /> },
    {
        path: '/admin/addproduct',
        element: <AddProduct />,
    },
    {
        path: '/admin/productsmanage',
        element: <ProductsManage />,
    },
    {
        path: '/admin/update/:id',
        element: <UpdateProduct />,
    },
    {
        path: '/admin/ordersmanage',
        element: <OrdersManage />,
    },
    {
        path: '/admin/receivemanage',
        element: <ReceiveManage />,
    },
    {
        path: '/admin/receivemanage/addreceive',
        element: <AddReceive />,
    },
    {
        path: '/admin/order/:id',
        element: <OrderDetail />,
    },
    {
        path: '/admin/incomestats',
        element: <IncomeStats />,
    },
];

export { publicRoutes, privateRoutes, adminRoutes };
