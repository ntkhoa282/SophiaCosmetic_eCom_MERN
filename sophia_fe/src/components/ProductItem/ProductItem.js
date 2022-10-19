import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);
function ProductItem({ title, to, imgURL, price }) {
    const base64String = btoa(String.fromCharCode(...new Uint8Array(imgURL.data.data)));
    return (
        <div className={cx('col-lg-3', 'col-md-6', 'mt-4')}>
            <Link to={to}>
                <div className={cx('product-item')}>
                    <img src={`data:image/png;base64,${base64String}`} alt={title} />
                    <div className={cx('product-item_text')}>
                        <p className={cx('mt-3')}>{title}</p>
                        <p className={cx('price')}>
                            {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(price)}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
