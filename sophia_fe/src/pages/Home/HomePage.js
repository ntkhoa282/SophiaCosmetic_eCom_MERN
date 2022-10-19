import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);
function HomePage() {
    return (
        <>
            <div className={cx('banner')}>
                <img src={require('~/assets/images/Banner.png')} alt="Banner home page" />
            </div>
            <div className={cx('ship')}>
                <div className={cx('container-fluid')}>
                    <div className={cx('row')}>
                        <div className={cx('col-md-3', 'ship-item')}>
                            <div className={cx('d-flex', 'justify-content-center')}>
                                <div className={cx('ship-img')}>
                                    <img src={require('~/assets/images/ShipImg.png')} alt="ship-img" />
                                </div>
                                <div className={cx('ship-content')}>
                                    <p>
                                        <b>Ship COD toàn quốc</b>
                                    </p>
                                    <p>Thanh toán khi nhận hàng</p>
                                    <p>Phí 20k - 25k</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-md-3', 'ship-item')}>
                            <div className={cx('d-flex', 'justify-content-center')}>
                                <div className={cx('ship-img')}>
                                    <img src={require('~/assets/images/DoiTraImg.png')} alt="ship-img" />
                                </div>
                                <div className={cx('ship-content')}>
                                    <p>
                                        <b>Miễn phí đổi - trả</b>
                                    </p>
                                    <p>Đối với sản phẩm lỗi sản xuất</p>
                                    <p>hoặc vận chuyển</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-md-3', 'ship-item')}>
                            <div className={cx('d-flex', 'justify-content-center')}>
                                <div className={cx('ship-img')}>
                                    <img src={require('~/assets/images/UuDaiImg.png')} alt="ship-img" />
                                </div>
                                <div className={cx('ship-content')}>
                                    <p>
                                        <b>Ưu đãi thành viên</b>
                                    </p>
                                    <p>Đăng ký thành viên nhận</p>
                                    <p>nhiều ưu đãi lớn</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-md-3', 'ship-item')}>
                            <div className={cx('d-flex', 'justify-content-center')}>
                                <div className={cx('ship-img')}>
                                    <img src={require('~/assets/images/ComboImg.png')} alt="ship-img" />
                                </div>
                                <div className={cx('ship-content')}>
                                    <p>
                                        <b>Ưu đãi combo</b>
                                    </p>
                                    <p>Mua theo combo, càng</p>
                                    <p>mua càng rẻ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
