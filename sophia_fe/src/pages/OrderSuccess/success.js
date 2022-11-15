import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './success.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function OrderSuccess() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={cx('container')}>
            <div className={cx('feature')}>
                <div className={cx('checkmark-wrapper', 'mt-5')}>
                    <span className={cx('checkmark')}></span>
                </div>
                <div className={cx('my-5', 'text-center', 'min-vh-50', 'success')}>
                    <h2>ĐẶT HÀNG THÀNH CÔNG</h2>
                    <p className={cx('lead fw-bolder', 'mx-auto', 'col-6')}>
                        Sophia Cosmetic sẽ XÁC NHẬN đơn hàng của bạn qua điện thoại <br />
                        Bạn vui lòng nghe điện thoại khi chúng tôi liên hệ <br />
                        (Mọi vấn đề về đơn hàng hãy liên hệ chúng tôi qua <br />
                        Hotline: 1800.900.660)
                    </p>
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                        Tiếp tục mua hàng
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;
