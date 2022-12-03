import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { adGetOrderDetail } from '~/redux/apiResquest';
import httpRequest from '~/ultis/httpRequest';
import styles from './OrdersManage.module.scss';

const cx = classNames.bind(styles);

function OrdersManage() {
    const [status, setStatus] = useState('unconfimred');
    const [ordersList, setOrdersList] = useState([]);

    const dispatch = useDispatch();

    const handleStatusSelectChange = (e) => {
        const stt = e.target.value;
        setStatus(stt);
    };

    useEffect(() => {
        const getOrdersList = async () => {
            const res = await httpRequest.get(`/order?status=${status}`);
            setOrdersList(res.data);
        };
        getOrdersList();
    }, [status]);

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <h3>Danh sách đơn hàng </h3>
            </div>
            <div className={cx('mt-4', 'content')}>
                <div className={cx('stt-select')}>
                    <span>Trạng thái đơn hàng: </span>
                    <select onChange={handleStatusSelectChange}>
                        <option value="unconfimred">Chưa xác nhận</option>
                        <option value="confimred">Đã xác nhận</option>
                        <option value="cancle">Đã hủy</option>
                        <option value="success">Thành công</option>
                        <option value="failed">Thất bại</option>
                    </select>
                </div>
                <div className={cx('mt-4', 'ords-table')}>
                    <table>
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>Ngày đặt</td>
                                <td>Mã đơn hàng</td>
                                <td>Tài khoản đặt hàng</td>
                                <td>Số lượng mặt hàng</td>
                                <td>Trạng thái đơn hàng</td>
                                <td>Hình thức thanh toán</td>
                                <td>Tổng tiền</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {ordersList.map((order, index) => (
                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>{new Date(order.createdAt).toLocaleDateString('vi-VN').substring(0, 10)}</td>
                                    <td>{order._id}</td>
                                    <td>{order.userID.username}</td>
                                    <td>{order.products.length}</td>
                                    <td>
                                        {order.status === 'unconfimred' ? (
                                            <span className={cx('unconfimred')}>Chưa xác nhận</span>
                                        ) : order.status === 'confimred' ? (
                                            <span className={cx('confimred')}>Đã xác nhận</span>
                                        ) : order.status === 'cancle' ? (
                                            <span className={cx('cancle')}>Đã hủy</span>
                                        ) : order.status === 'success' ? (
                                            <span className={cx('confimred')}>Thành công</span>
                                        ) : (
                                            <span className={cx('cancle')}>Thất bại</span>
                                        )}
                                    </td>
                                    <td>{order.payment}</td>
                                    <td>
                                        {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                            order.total,
                                        )}
                                    </td>
                                    <td>
                                        <Link
                                            to={`/admin/order/${order._id}`}
                                            onClick={() => {
                                                adGetOrderDetail(dispatch, order._id);
                                            }}
                                        >
                                            Xem
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrdersManage;
