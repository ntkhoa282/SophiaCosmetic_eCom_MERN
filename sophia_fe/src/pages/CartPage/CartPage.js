import { useDispatch, useSelector } from 'react-redux';
import { removeCartProd } from '~/redux/apiResquest';
import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';
import CartProdItem from './CartProdItem';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CartPage() {
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const cartData = useSelector((state) => state.cart);

    const SHIPPING_FEE = 25000;

    const products = cartData.products;

    const handleRemoveProd = (prodid, userid) => {
        removeCartProd(dispatch, userid, prodid);
    };

    const TOTAL_PROD = products.reduce((total, product) => total + product.quantity * product.productID.price, 0) || 0;

    return (
        <div className={cx('container')}>
            <div className={cx('feature')}>
                <p className={cx('pathtitle')}>Trang chủ / Giỏ hàng</p>

                <div className={cx('row')}>
                    <div className={cx('col-lg-7')}>
                        {products.length === 0 ? (
                            <p className={cx('message')}>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
                        ) : (
                            products.map((product) => (
                                <CartProdItem
                                    key={product?._id}
                                    data={product}
                                    onClickDel={() => {
                                        handleRemoveProd(product.productID._id, currentUser._id);
                                    }}
                                />
                            ))
                        )}
                    </div>
                    <div className={cx('col-lg-5')}>
                        <div className={cx('total-money')}>
                            <p className={cx('total-money-title')}>Tóm tắt đơn hàng</p>
                            <hr />
                            <div className={cx('d-flex', 'justify-content-between', 'mt-4', 'prop')}>
                                <p>Tổng giá trị đơn :</p>
                                <p>
                                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                        TOTAL_PROD,
                                    )}
                                </p>
                            </div>
                            <div className={cx('d-flex', 'justify-content-between', 'mt-4', 'prop')}>
                                <p>Phí giao hàng :</p>
                                <p>
                                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                        products.length === 0 ? 0 : SHIPPING_FEE,
                                    )}
                                </p>
                            </div>
                            <div className={cx('d-flex', 'justify-content-between', 'mt-4', 'prop')}>
                                <p>Tổng thanh toán :</p>
                                <p>
                                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                        products.length === 0 ? 0 : TOTAL_PROD + SHIPPING_FEE,
                                    )}
                                </p>
                            </div>
                            <div className={cx('mt-4')}>
                                <Link to="/order">
                                    <button className={cx('order-btn')} disabled={products.length > 0 ? false : true}>
                                        Tiến hành đặt hàng
                                        <FontAwesomeIcon icon={faArrowRightLong} />
                                    </button>
                                </Link>
                            </div>
                            <div className={cx('mt-4')}>
                                <Link to="/">
                                    <button className={cx('shopping-btn')}>
                                        <FontAwesomeIcon icon={faArrowLeftLong} />
                                        Tiếp tục mua hàng
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
