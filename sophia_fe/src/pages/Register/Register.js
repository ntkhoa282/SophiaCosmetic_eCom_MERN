import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import FormInput from '~/components/FormInput/FormInput';
import styles from './Register.module.scss';



const cx = classNames.bind(styles);
function Register() {
    return (
        <form action="" method="" className={cx('form')}>
            <div className={cx('content')}>
                <Link to="/">
                    <img className={cx('logo')} src={require('~/assets/LogoGreen.svg').default} alt="logo" />
                </Link>
                <div className={cx('register')}>
                    <h6>Đăng ký tài khoản</h6>
                    <div className={cx('register-item')}>
                        <FormInput type="text">Họ và tên</FormInput>
                    </div>
                    <div className={cx('register-item')}>
                        <FormInput type="text">Số điện thoại</FormInput>
                    </div>
                    <div className={cx('register-item')}>
                        <FormInput type="text">Email</FormInput>
                    </div>
                    <div className={cx('register-item')}>
                        <FormInput type="text">Tên đăng nhập</FormInput>
                    </div>
                    <div className={cx('register-item')}>
                        <FormInput type="password">Mật khẩu</FormInput>
                    </div>
                    <div className={cx('register-item', 'd-flex', 'justify-content-between', 'mb-4')}>
                        <Link to="/login" className="back-login">
                            <FontAwesomeIcon icon={faCircleLeft} className={cx('icon-back')} />
                            Về trang đăng nhập
                        </Link>
                        <div className={cx('text-center', 'register-button')}>
                            <button className={cx('button-register', 'btn', 'mt-4')}>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Register;
