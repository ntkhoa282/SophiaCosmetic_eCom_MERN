import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '~/redux/apiResquest';

const cx = classNames.bind(styles);

function DetailPage() {
    const prodDetail = useSelector((state) => state.product.detail);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const base64String = btoa(String.fromCharCode(...new Uint8Array(prodDetail.image.data.data)));

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = Number(e.target.value);
        const q = value > 1 ? (value < prodDetail.quantity ? value : prodDetail.quantity) : 1;
        setQuantity(q);
    };

    const handlePlus = () => {
        if (quantity < prodDetail.quantity) {
            setQuantity(quantity + 1);
        }
    };

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (currentUser) {
            const cart = {
                userID: currentUser?._id,
                productID: prodDetail?._id,
                quantity: quantity,
                option: null,
            };
            addToCart(dispatch, cart);
        } else {
            navigate('/login');
            alert('Bạn cần đăng nhập để tiếp tục mua hàng');
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('feature')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-6')}>
                        <img
                            src={`data:image/png;base64,${base64String}`}
                            alt={prodDetail.title}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className={cx('col-lg-6')}>
                        <h6 className={cx('mb-3', 'prod-title')}>{prodDetail.title}</h6>
                        <div className={cx('mt-5')}>
                            <p className={cx('price')}>
                                {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                    prodDetail.price,
                                )}
                            </p>
                            <span style={{ color: '#999' }}>(Đã bao gồm VAT)</span>
                        </div>
                        <div className={cx('mt-5')}>
                            <p style={{ color: '#1f601f', fontWeight: '500', fontSize: '17px' }}>Số lượng:</p>
                            <div className={cx('quantity-btn')}>
                                <button className={cx('quantity-minus')} type="button" onClick={handleMinus}>
                                    -
                                </button>
                                <input
                                    className={cx('quantity-number')}
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                />
                                <button className={cx('quantity-plus')} type="button" onClick={handlePlus}>
                                    +
                                </button>
                            </div>
                            <p className={cx('instore')}>{prodDetail.quantity} sản phẩm có sẵn</p>
                        </div>
                        <div className={cx('mt-4')}>
                            <button className={cx('add-to-cart-btn')} onClick={handleAddToCart}>
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                        <div className={cx('phiShip', 'mt-4')}>
                            <div className={cx('row')}>
                                <div className={cx('col-md-3', 'col-3', 'shipLeft')}>
                                    <img src={require('~/assets/images/ShipImg2.png')} alt="xe" />
                                </div>
                                <div className={cx('col-md-9', 'col-9')}>
                                    <p className={cx('green')}>Phí ship</p>
                                    <ul>
                                        <li>Nội thành Hà Nội - 20.000đ</li>
                                        <li>Các tỉnh còn lại - 25.000đ</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={cx('row')}>
                                <div className={cx('col-md-3', 'col-3', 'shipLeft')}>
                                    <img src={require('~/assets/images/Time.png')} alt="time" />
                                </div>
                                <div className={cx('col-md-9', 'col-9')}>
                                    <p className={cx('green')}>Thời gian dự kiến</p>
                                    <ul>
                                        <li>Miền Bắc: 1-2 ngày</li>
                                        <li>Miền Trung và Miền Nam: 2-5 ngày</li>
                                    </ul>
                                    <p className={cx('green', 'mt3')}>
                                        Miễn phí đổi trả sản phẩm do lỗi vận chuyển, sản xuất
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row', 'mt-5')}>
                    <div className={cx('col-lg-4', 'col-md-4')}>
                        <p className={cx('ttsp')}>THÔNG TIN SẢN PHẨM</p>
                    </div>
                    <div className={cx('col-lg-6', 'col-md-8')}>
                        <p className={cx('desc')}>{prodDetail.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
