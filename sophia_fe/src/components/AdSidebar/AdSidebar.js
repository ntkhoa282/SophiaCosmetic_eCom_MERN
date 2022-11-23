import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AdSidebar.module.scss';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const cx = classNames.bind(styles);

function AdSidebar() {
    const dropDown1 = () => {
        var img = document.getElementById('iconRight1');
        var navDrop = document.getElementById('navDrop1');
        if (navDrop.style.display === 'none') {
            navDrop.style.display = 'block';
            img.style.transform = 'rotate(90deg)';
        } else {
            navDrop.style.display = 'none';
            img.style.transform = 'rotate(0deg)';
            img.style.margin = '0';
        }
    };

    const dropDown2 = () => {
        var img = document.getElementById('iconRight2');
        var navDrop = document.getElementById('navDrop2');
        if (navDrop.style.display === 'none') {
            navDrop.style.display = 'block';
            img.style.transform = 'rotate(90deg)';
        } else {
            navDrop.style.display = 'none';
            img.style.transform = 'rotate(0deg)';
            img.style.margin = '0';
        }
    };

    const dropDown3 = () => {
        var img = document.getElementById('iconRight3');
        var navDrop = document.getElementById('navDrop3');
        if (navDrop.style.display === 'none') {
            navDrop.style.display = 'block';
            img.style.transform = 'rotate(90deg)';
        } else {
            navDrop.style.display = 'none';
            img.style.transform = 'rotate(0deg)';
            img.style.margin = '0';
        }
    };

    const dropDown4 = () => {
        var img = document.getElementById('iconRight4');
        var navDrop = document.getElementById('navDrop4');
        if (navDrop.style.display === 'none') {
            navDrop.style.display = 'block';
            img.style.transform = 'rotate(90deg)';
        } else {
            navDrop.style.display = 'none';
            img.style.transform = 'rotate(0deg)';
            img.style.margin = '0';
        }
    };

    return (
        <div className={cx('sidenav')}>
            <div className={cx('d-flex', 'justify-content-center', 'sidenav-title')}>
                <Link to="/admin">
                    <img className={cx('logo')} src={require('~/assets/Logo.svg').default} alt="logo" />
                </Link>
            </div>
            <div className={cx('sidebar', 'mt-5')}>
                <ul className={cx('nav-list')}>
                    <li className={cx('mt-2')}>
                        <div className={cx('title')} onClick={dropDown1}>
                            <div>
                                <span>KHÁCH HÀNG</span>
                            </div>
                            <FontAwesomeIcon id="iconRight1" icon={faAngleRight} />
                        </div>
                        <ul id="navDrop1" className={cx('nav', 'nav-treeview')}>
                            <li className={cx('nav-item')}>
                                <Link to="/" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Danh sách khách hàng</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cx('mt-4')}>
                        <div className={cx('title')} onClick={dropDown2}>
                            <div>
                                <span>SẢN PHẨM</span>
                            </div>
                            <FontAwesomeIcon id="iconRight2" icon={faAngleRight} />
                        </div>
                        <ul id="navDrop2" className={cx('nav', 'nav-treeview')}>
                            <li className={cx('nav-item')}>
                                <Link to="/" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Danh sách sản phẩm</p>
                                    </div>
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link to="/admin/addproduct" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Thêm sản phẩm mới</p>
                                    </div>
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link to="/" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Sửa thông tin sản phẩm</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cx('mt-4')}>
                        <div className={cx('title')} onClick={dropDown3}>
                            <div>
                                <span>ĐƠN HÀNG</span>
                            </div>
                            <FontAwesomeIcon id="iconRight3" icon={faAngleRight} />
                        </div>
                        <ul id="navDrop3" className={cx('nav', 'nav-treeview')}>
                            <li className={cx('nav-item')}>
                                <Link to="/" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Danh sách đơn hàng</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cx('mt-4')}>
                        <div className={cx('title')} onClick={dropDown4}>
                            <div>
                                <span>THỐNG KÊ</span>
                            </div>
                            <FontAwesomeIcon id="iconRight4" icon={faAngleRight} />
                        </div>
                        <ul id="navDrop4" className={cx('nav', 'nav-treeview')}>
                            <li className={cx('nav-item')}>
                                <Link to="/" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Thống kê doanh thu</p>
                                    </div>
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link to="/" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Thống kê đơn hàng</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default memo(AdSidebar);
