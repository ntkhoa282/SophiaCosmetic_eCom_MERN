import classNames from 'classnames/bind';
import styles from './MyOrder.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function OrderItem({ data, onClick }) {
    return (
        <div className={cx('row', 'mt-4', 'order-item')}>
            <div className={cx('d-flex', 'justify-content-between', 'status')}>
                <p className={cx('createdate')}>
                    Ngày đặt: {new Date(data.createdAt).toLocaleDateString('vi-VN').substring(0, 10)}
                </p>
                {data.status === 'unconfimred' ? (
                    <p className={cx('unconfimred')}>Chờ xác nhận</p>
                ) : data.status === 'confimred' ? (
                    <p className={cx('confimred')}>Đã xác nhận</p>
                ) : (
                    <p className={cx('cancle')}>Đã hủy</p>
                )}
            </div>
            <hr />
            <div className={cx('info')}>
                <p>Tên người nhận: {data.name}</p>
                <p>Số điện thoại: {data.phone}</p>
                <p>Địa chỉ nhận hàng: {data.address}</p>
            </div>
            <hr />
            <div className={cx('products')}>
                {data.products.map((prod) => (
                    <div key={prod._id} className={cx('d-flex', 'justify-content-between')}>
                        <p className={cx('title')}>
                            {prod.productId.title} <br /> Số lượng: {prod.quantity}
                        </p>
                        <p className={cx('price')}>
                            {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                prod.productId.price,
                            )}
                        </p>
                    </div>
                ))}
            </div>
            <hr />
            <div>
                <p className={cx('total')}>
                    Tổng số tiền:{' '}
                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(data.total)}
                </p>
            </div>
            <div className={cx('cancle-btn')}>
                {data.status === 'unconfimred' ? (
                    <button type="button" onClick={onClick}>
                        Hủy đơn hàng
                    </button>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

OrderItem.propTypes = {
    data: PropTypes.object,
    onclick: PropTypes.func,
};

export default OrderItem;
