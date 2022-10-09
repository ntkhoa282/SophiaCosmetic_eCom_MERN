import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-3')}>
                        <img className={cx('logo', 'mb-5')} src={require('~/assets/Logo.svg').default} alt="logo" />
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
                            <h6>THÔNG TIN LIÊN HỆ</h6>
                            <p>Địa chỉ : Số 7 Ngõ 100 Tây Sơn , Quận Đống Đa , Hà Nội</p>
                            <p>Hotline : 1800.900.660</p>
                            <p>Facebook : Sophia Cosmetic</p>
                            <p>Instagram : @Sophia.cosmetic</p>
                        </div>
                    </div>
                    <div className={cx('col-lg-5', 'col-md-6')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-6', 'col-md-6')}>
                                <div className={cx('footer-item', 'item-2')}>
                                    <h6>HỖ TRỢ KHÁCH HÀNG</h6>
                                    <p>Câu hỏi thường gặp</p>
                                    <p>Hướng dẫn đặt hàng</p>
                                    <p>Phương thức vận chuyển</p>
                                    <p>Thông tin chuyển khoản</p>
                                </div>
                            </div>
                            <div className={cx('col-lg-6', 'col-md-6')}>
                                <div className={cx('footer-item', 'item-3')}>
                                    <h6>VỀ SOPHIA</h6>
                                    <p>Giới thiệu</p>
                                    <p>FEEDBACK</p>
                                    <p>Việc làm</p>
                                </div>
                            </div>
                        </div>
                        <img className={cx('mt-3', 'luuY')} src={require('~/assets/images/LuuY.png')} alt="luu y" />
                    </div>
                    <div className={cx('col-lg-3', 'col-md-6')}>
                        <div className={cx('footer-item', 'item-3')}>
                            <h6>CHƯƠNG TRÌNH VÀ CHÍNH SÁCH</h6>
                            <p>Chương trình Membership Card</p>
                            <p>Chương trình FREEGIFT</p>
                            <p>Chính sách đổi trả</p>
                            <p>Thanh toán, giao nhận</p>
                            <p>Chính sách bảo mật</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
