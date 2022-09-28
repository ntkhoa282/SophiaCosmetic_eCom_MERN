import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Search from './Search/Search';

const cx = classNames.bind(styles);
function Header() {
    const currentUser = false;

    return (
        <header>
            <p className={cx('title')}>
                Tặng ngay tinh dầu <b>Chăm sóc da từ thiên nhiên</b> cho đơn hàng từ 2 sản phẩm. <b>XEM NGAY</b> để
                không bỏ lỡ!!
            </p>

            <div className={cx('header')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-2', 'col-md-2')}>
                            <Link to="/">
                                <img className={cx('logo')} src={require('~/assets/Logo.svg').default} alt="logo" />
                            </Link>
                        </div>

                        <Search />

                        <div className={cx('col-lg-5', 'shop-cart')}>
                            {currentUser ? (
                                <div className={cx('user-act')}>
                                    <Link to="/profile" className={cx('lores')}>
                                        <FontAwesomeIcon icon={faUser} className={cx('icon-user')} />
                                    </Link>
                                    <Link to="/">
                                        <button className={cx('btn', 'shop-right')}>
                                            <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                                            <span>Yêu thích</span>
                                        </button>
                                    </Link>
                                    <Link to="/my-cart">
                                        <button className={cx('btn', 'shop-right')}>
                                            <FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />
                                            <span>Giỏ hàng</span>
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                                <div className={cx('act-div')}>
                                    <Link to="/login" className={cx('actions')}>
                                        ĐĂNG NHẬP
                                    </Link>
                                    <span> / </span>
                                    <Link to="/register" className={cx('actions')}>
                                        ĐĂNG KÝ
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('menu')}>
                <nav className={cx('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark')}>
                    <div className={cx('container')}>
                        <Link to="/" className={cx('navbar-brand')}>
                            <FontAwesomeIcon icon={faHouse} />
                        </Link>
                        <button
                            className={cx('navbar-toggler')}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <img src={require('~/assets/images/Frame.png')} alt="collapse navbar" />
                        </button>
                        <div className={cx('collapse', 'navbar-collapse')} id="navbarSupportedContent">
                            <ul className={cx('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0')}>
                                <li className={cx('nav-item')}>
                                    <Link to="/about" className={cx('nav-link', 'active', 'link-item')}>
                                        Về Sophia
                                    </Link>
                                </li>
                                <li className={cx('nav-item')}>
                                    <Link to="/product" className={cx('nav-link', 'active', 'link-item')}>
                                        Trang điểm
                                    </Link>
                                </li>
                                <li className={cx('nav-item')}>
                                    <Link to="/product" className={cx('nav-link', 'active', 'link-item')}>
                                        Chăm sóc da
                                    </Link>
                                </li>
                                <li className={cx('nav-item')}>
                                    <Link to="/product" className={cx('nav-link', 'active', 'link-item')}>
                                        Chăm sóc tóc
                                    </Link>
                                </li>
                                <li className={cx('nav-item')}>
                                    <div className={cx('nav-link', 'active')}>
                                        <FontAwesomeIcon className={cx('hotline-icon')} icon={faPhone} /> Hotline
                                        <span className={cx('hotline')}> 1800.900.660</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
