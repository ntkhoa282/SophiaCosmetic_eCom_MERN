import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-3')}>
                        <img className={cx('logo', 'mb-5')} src={require('~/assets/images/Logo.png')} alt="logo" />
                    </div>
                    <div className={cx('col-lg-6', 'search')}>
                        <input
                            className={cx('search-input', 'form-control')}
                            placeholder="Đăng ký địa chỉ email để nhận được thông tin khuyến mãi sớm nhất.. "
                        />
                        <div className={cx('search-img')}>
                            <button className={cx('button-search')}>ĐĂNG KÝ</button>
                        </div>
                    </div>
                    <div className={cx('col-lg-3')}></div>
                </div>

                <div className={cx('row')}>
                    <div className={cx('col-lg-4', 'col-md-6')}>
                        <div className={cx('footer-item', 'item-1')}>
                            <h6>CONTACT INFO</h6>
                            <p>CS1: Số 7 Ngõ 100 Tây Sơn , Quận Đống Đa , Hà Nội</p>
                            <p>CS2: Số 104 Ngõ 72 Nguyễn Chí Thanh, Quận Đống Đa, Hà Nội</p>
                            <p>CS3: Số 186 Hàng Bông , Quận Hoàn Kiếm , Hà Nội</p>
                            <p>CS4: Số 237 Bạch Mai , Quận Hai Bà Trưng , Hà Nội</p>
                            <p>CS5: Số 72 Trần Phú , Quận Hà Đông , Hà Nội</p>
                        </div>
                    </div>
                    <div className={cx('col-lg-5', 'col-md-6')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-6', 'col-md-6')}>
                                <div className={cx('footer-item', 'item-2')}>
                                    <h6>HỖ TRỢ KHÁCH HÀNG</h6>
                                    <p>Danh Sách Thương Hiệu</p>
                                    <p>Các Nhóm Hàng Hóa</p>
                                    <p>Hướng Dẫn Đặt Hàng Trên Website</p>
                                    <p>Cách Thức Mua & Đặt Ship Hàng</p>
                                    <p>Phí Vận Chuyển</p>
                                    <p>Thông Tin Chuyển Khoản</p>
                                    <p>Hệ Thống Cửa Hàng</p>
                                </div>
                            </div>
                            <div className={cx('col-lg-6', 'col-md-6')}>
                                <div className={cx('footer-item', 'item-3')}>
                                    <h6>VỀ SOPHIA</h6>
                                    <p>Our Story</p>
                                    <p>FEEDBACK</p>
                                    <p>Việc Làm</p>
                                </div>
                            </div>
                        </div>
                        <img className={cx('mt-3', 'luuY')} src={require('~/assets/images/LuuY.png')} alt="luu y" />
                    </div>
                    <div className={cx('col-lg-3', 'col-md-6')}>
                        <div className={cx('footer-item', 'item-3')}>
                            <h6>CHƯƠNG TRÌNH VÀ CHÍNH SÁCH</h6>
                            <p>Chương Trình Membership Card</p>
                            <p>Chương Trình FREEGIFT</p>
                            <p>Chính Sách Vận Chuyển</p>
                            <p>Chính Sách Đổi Trả</p>
                            <p>Quy Định Thanh Toán</p>
                            <p>Chính Sách Bảo Mật</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
