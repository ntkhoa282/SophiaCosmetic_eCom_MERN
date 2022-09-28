import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    return (
        <div className={cx('col-lg-5', 'col-md-8', 'search')}>
            <input className={cx('search-input', 'form-control')} placeholder="Tìm sản phầm, danh mục mong muốn..." />
            <div className={cx('search-img')}>
                <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
            </div>
        </div>
    );
}

export default Search;
