import classNames from 'classnames/bind';
import styles from './MyOrder.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import { getUserOrder, updateOrderStatus } from '~/redux/apiResquest';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function MyOrderPage() {
    const myOrders = useSelector((state) => state.order.ordersList);
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        getUserOrder(dispatch, currentUser._id);
    }, [currentUser._id, dispatch]);

    const handleCancleBtn = async (id, status, userid) => {
        if (window.confirm('Bạn chắc chắn muốn hủy đơn hàng này?')) {
            await updateOrderStatus(dispatch, id, status, userid);
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('feature')}>
                <h4 className={cx('text-center')}>Đơn hàng của tôi</h4>
                <div>
                    {myOrders.map((item) => (
                        <OrderItem
                            key={item._id}
                            data={item}
                            onClick={() => {
                                handleCancleBtn(item._id, 'cancle', currentUser._id);
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyOrderPage;
