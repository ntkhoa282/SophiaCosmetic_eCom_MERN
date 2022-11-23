import classNames from 'classnames/bind';
import styles from './AdminPage.module.scss';

const cx = classNames.bind(styles);

function AdminPage() {
    return <h1 className={cx('title')}>Xin chào! Quản trị viên Sophia Cosmetic</h1>;
}

export default AdminPage;
