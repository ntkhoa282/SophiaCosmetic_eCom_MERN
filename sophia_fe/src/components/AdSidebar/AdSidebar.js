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

    const dropDown5 = () => {
        var img = document.getElementById('iconRight5');
        var navDrop = document.getElementById('navDrop5');
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
                                <span>KH??CH H??NG</span>
                            </div>
                            <FontAwesomeIcon id="iconRight1" icon={faAngleRight} />
                        </div>
                        <ul id="navDrop1" className={cx('nav', 'nav-treeview')}>
                            <li className={cx('nav-item')}>
                                <Link to="/" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Danh s??ch kh??ch h??ng</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cx('mt-4')}>
                        <div className={cx('title')} onClick={dropDown2}>
                            <div>
                                <span>S???N PH???M</span>
                            </div>
                            <FontAwesomeIcon id="iconRight2" icon={faAngleRight} />
                        </div>
                        <ul id="navDrop2" className={cx('nav', 'nav-treeview')}>
                            <li className={cx('nav-item')}>
                                <Link to="/admin/productsmanage" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Danh s??ch s???n ph???m</p>
                                    </div>
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link to="/admin/addproduct" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Th??m s???n ph???m m???i</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cx('mt-4')}>
                        <div className={cx('title')} onClick={dropDown3}>
                            <div>
                                <span>????N H??NG</span>
                            </div>
                            <FontAwesomeIcon id="iconRight3" icon={faAngleRight} />
                        </div>
                        <ul id="navDrop3" className={cx('nav', 'nav-treeview')}>
                            <li className={cx('nav-item')}>
                                <Link to="/admin/ordersmanage" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Danh s??ch ????n h??ng</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cx('mt-4')}>
                        <div className={cx('title')} onClick={dropDown4}>
                            <div>
                                <span>????N NH???P H??NG</span>
                            </div>
                            <FontAwesomeIcon id="iconRight4" icon={faAngleRight} />
                        </div>
                        <ul id="navDrop4" className={cx('nav', 'nav-treeview')}>
                            <li className={cx('nav-item')}>
                                <Link to="/admin/receivemanage" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Danh s??ch ????n nh???p h??ng</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cx('mt-4')}>
                        <div className={cx('title')} onClick={dropDown5}>
                            <div>
                                <span>TH???NG K??</span>
                            </div>
                            <FontAwesomeIcon id="iconRight5" icon={faAngleRight} />
                        </div>
                        <ul id="navDrop5" className={cx('nav', 'nav-treeview')}>
                            <li className={cx('nav-item')}>
                                <Link to="/admin/incomestats" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Th???ng k?? doanh thu</p>
                                    </div>
                                </Link>
                            </li>
                            {/*<li className={cx('nav-item')}>
                                <Link to="/" className={cx('nav-link-item')}>
                                    <div className={cx('d-flex', 'justify-content-between')}>
                                        <p className={cx('ml-3')}>Th???ng k?? ????n h??ng</p>
                                    </div>
                                </Link>
    </li>*/}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default memo(AdSidebar);
