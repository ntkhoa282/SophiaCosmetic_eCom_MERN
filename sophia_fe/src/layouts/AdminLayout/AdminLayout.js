import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
import PropTypes from 'prop-types';
import AdSidebar from '~/components/AdSidebar/AdSidebar';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <AdSidebar />
            <main>{children}</main>
        </div>
    );
}

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminLayout;
