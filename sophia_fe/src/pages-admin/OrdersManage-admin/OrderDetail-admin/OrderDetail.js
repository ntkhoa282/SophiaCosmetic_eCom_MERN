import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { adUpdateStatus } from '~/redux/apiResquest';
import styles from './OrderDetail.module.scss';

const cx = classNames.bind(styles);

function OrderDetail() {
    const orderDetail = useSelector((state) => state.admin.ordermanage.detail);

    const dispatch = useDispatch();

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <h3>
                    Chi tiết đơn hàng <span>#{orderDetail._id}</span>
                </h3>
                <h5>
                    Trạng thái đơn hàng:{' '}
                    {orderDetail.status === 'unconfimred' ? (
                        <span className={cx('unconfimred')}>Chưa xác nhận</span>
                    ) : orderDetail.status === 'confimred' ? (
                        <span className={cx('confimred')}>Đã xác nhận</span>
                    ) : orderDetail.status === 'cancle' ? (
                        <span className={cx('cancle')}>Đã hủy</span>
                    ) : orderDetail.status === 'success' ? (
                        <span className={cx('confimred')}>Thành công</span>
                    ) : (
                        <span className={cx('cancle')}>Thất bại</span>
                    )}
                </h5>
                <h5>
                    Phương thức thanh toán:{' '}
                    <span>
                        {orderDetail.payment === 'cod'
                            ? 'THANH TOÁN KHI NHẬN HÀNG (COD)'
                            : 'THANH TOÁN QUA TÀI KHOẢN NGÂN HÀNG (BANKING)'}
                    </span>
                </h5>
                <p>Ngày đặt: {new Date(orderDetail.createdAt).toLocaleDateString('vi-VN').substring(0, 10)}</p>
                <hr />
            </div>
            <div className={cx('mt-3', 'acc-order')}>
                <div>
                    <h5>Thông tin tài khoản đặt</h5>
                    <p>
                        Tên tài khoản: <span>{orderDetail.userID.username}</span>
                    </p>
                    <p>
                        SDT: <span>{orderDetail.userID.phone}</span>
                    </p>
                    <p>
                        Email: <span>{orderDetail.userID.email}</span>
                    </p>
                </div>
                <hr />
            </div>
            <div className={cx('mt-3', 'receive-order')}>
                <div className={cx('info')}>
                    <h5>Thông tin người nhận</h5>
                    <p>
                        Tên người nhận: <span>{orderDetail.name}</span>
                    </p>
                    <p>
                        SDT người nhận: <span>{orderDetail.phone}</span>
                    </p>
                    <p>
                        Địa chỉ nhận hàng: <span>{orderDetail.address}</span>
                    </p>
                </div>
                <hr />
                <div className={cx('mt-3', 'prod-list')}>
                    <h5>Danh sách sản phẩm</h5>
                    <table>
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>Tên sản phẩm</td>
                                <td>Số lượng</td>
                                <td>Đơn giá</td>
                            </tr>
                        </thead>
                        <tbody>
                            {orderDetail.products.map((prod, index) => (
                                <tr key={prod._id}>
                                    <td>{index + 1}</td>
                                    <td>{prod.productId.title}</td>
                                    <td>{prod.quantity}</td>
                                    <td>{prod.productId.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <th colSpan="4" style={{ color: 'Red', textAlign: 'right', paddingRight: '25px' }}>
                                    Tổng tiền:{' '}
                                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                        orderDetail.total,
                                    )}
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={cx('mt-3', 'd-flex')}>
                    {orderDetail.status === 'unconfimred' && (
                        <div className={cx('btn-action')}>
                            <button
                                className={cx('cf-btn')}
                                type="button"
                                onClick={() => {
                                    adUpdateStatus(dispatch, 'confimred', orderDetail._id);
                                }}
                            >
                                Xác nhận đơn hàng
                            </button>
                            <button
                                className={cx('cancle-btn')}
                                type="button"
                                onClick={() => {
                                    adUpdateStatus(dispatch, 'cancle', orderDetail._id);
                                }}
                            >
                                Hủy đơn hàng
                            </button>
                        </div>
                    )}
                    {orderDetail.status === 'confimred' && (
                        <div className={cx('btn-action')}>
                            <button
                                className={cx('succ-btn')}
                                type="button"
                                onClick={() => {
                                    adUpdateStatus(dispatch, 'success', orderDetail._id);
                                }}
                            >
                                Thành công
                            </button>
                            <button
                                className={cx('failed-btn')}
                                type="button"
                                onClick={() => {
                                    adUpdateStatus(dispatch, 'failed', orderDetail._id);
                                }}
                            >
                                Thất bại
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
