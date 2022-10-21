import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Sidebar() {
    const cate = useSelector((state) => state.category.category);
    return (
        <div className={cx('trangdiem-menuList')}>
            <div className={cx('trangdiem-menu')}>
                <div className={cx('sidebar')}>
                    <ul className={cx('nav_list')}>
                        {cate.map((category) => (
                            <li key={category._id} className={cx('mt-2')}>
                                <Link to={'/' + category.slug} className={cx('title')}>
                                    {category.title}
                                    <FontAwesomeIcon icon={faAngleRight} className={cx('sidebar-icon')}/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
