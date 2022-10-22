import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Search.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function SearchItem({ data }) {
    const base64String = btoa(String.fromCharCode(...new Uint8Array(data.image.data.data)));
    return (
        <div>
            <Link to={`/${data.category.slug}/${data.slug}`} className={cx('wrapper')}>
                <img src={`data:image/png;base64,${base64String}`} alt={data.title} className={cx('prod-img')} />
                <div className={cx('info')}>
                    <h4 className={cx('title')}>{data.title}</h4>
                    <p className={cx('price')}>
                        {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(data.price)}
                    </p>
                </div>
            </Link>
        </div>
    );
}

SearchItem.propTypes = {
    data: PropTypes.object,
};

export default SearchItem;
