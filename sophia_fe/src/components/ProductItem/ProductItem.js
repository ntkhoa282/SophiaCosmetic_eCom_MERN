import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ProductItem.module.scss';
import { useDispatch } from 'react-redux';
import { getDetailProduct } from '~/redux/apiResquest';

const cx = classNames.bind(styles);
function ProductItem({ title, to, imgURL, price, id, quantity }) {
    const base64String = btoa(String.fromCharCode(...new Uint8Array(imgURL.data.data)));

    const dispatch = useDispatch();

    return (
        <div
            className={cx('col-lg-3', 'col-md-6', 'mt-4')}
            onClick={() => {
                getDetailProduct(dispatch, id);
            }}
        >
            <Link to={to}>
                <div className={cx('product-item')}>
                    <img src={`data:image/png;base64,${base64String}`} alt={title} />
                    <div className={cx('product-item_text')}>
                        <p className={cx('mt-3', 'title')}>{title}</p>
                        {quantity > 0 ? (
                            <p className={cx('price')}>
                                {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(price)}
                            </p>
                        ) : (
                            <p className={cx('price')}>Hết hàng</p>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
}

ProductItem.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
    imgURL: PropTypes.object,
    price: PropTypes.number,
    id: PropTypes.string,
    quantity: PropTypes.number,
};

export default ProductItem;
