import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <div>
            <Link className={cx('menu-item')} to={data.to}>
                {data.menuTitle}
            </Link>
        </div>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object,
};
export default MenuItem;
