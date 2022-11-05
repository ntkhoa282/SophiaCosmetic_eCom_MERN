import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import httpRequest from '~/ultis/httpRequest';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart } from '~/redux/apiResquest';

const cx = classNames.bind(styles);

function CartProdItem({ data, onClickDel }) {
    const base64String = btoa(String.fromCharCode(...new Uint8Array(data.productID.image.data.data)));

    const [quantity, setQuantity] = useState(data.quantity);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const dispatch = useDispatch();

    const handleQuantityChange = (e) => {
        const value = Number(e.target.value);
        const q = value > 1 ? (value < data.productID.quantity ? value : data.quantity) : 1;
        setQuantity(q);
    };

    const handlePlus = () => {
        if (quantity < data.productID.quantity) {
            setQuantity(quantity + 1);
        }
    };

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        const fetchApi = async () => {
            const cart = {
                userID: currentUser?._id,
                productID: data.productID._id,
                quantity: quantity,
                option: null,
            };
            await httpRequest.post('/cart/addtocart', cart);
            await getUserCart(dispatch, currentUser?._id);
        };
        fetchApi();
    }, [currentUser, quantity, data.productID._id, dispatch]);

    return (
        <div className={cx('row', 'mt-4')}>
            <div className={cx('col-md-2')}>
                <img
                    style={{ width: '100%' }}
                    src={`data:image/png;base64,${base64String}`}
                    alt={data.productID.title}
                />
            </div>
            <div className={cx('col-md-9')}>
                <div className={cx('d-flex', 'justify-content-between')}>
                    <p className={cx('prod-title')}>{data.productID.title}</p>
                    <button type="button" className={cx('prod-del-button')} onClick={onClickDel}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
                <div className={cx('d-flex', 'justify-content-between')}>
                    <div className={cx('mt-2')}>
                        <span style={{ fontSize: '14px' }}>Số lượng: </span>
                        <div className={cx('quantity-btn')}>
                            <button className={cx('quantity-minus')} type="button" onClick={handleMinus}>
                                -
                            </button>
                            <input className={cx('quantity-number')} value={quantity} onChange={handleQuantityChange} />
                            <button className={cx('quantity-plus')} type="button" onClick={handlePlus}>
                                +
                            </button>
                        </div>
                    </div>
                    <p className={cx('prod-price')}>
                        Đơn giá:{' '}
                        {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                            data.productID.price,
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

CartProdItem.propTypes = {
    data: PropTypes.object,
    onClickDel: PropTypes.func,
};

export default CartProdItem;
