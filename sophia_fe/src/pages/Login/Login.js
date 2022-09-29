import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import FormInput from '~/components/FormInput/FormInput';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
function Login() {
    return (
        <form action="" method="" className={cx('form')}>
            <div className={cx('content')}>
                <Link to="/">
                    <img className={cx('logo')} src={require('~/assets/LogoGreen.svg').default} alt="logo" />
                </Link>
                <div className={cx('register')}>
                    <h6>Đăng nhập</h6>
                    <div className={cx('register-item')}>
                        <FormInput type="text">Tên đăng nhập</FormInput>
                    </div>
                    <div className={cx('register-item')}>
                        <FormInput type="password">Mật khẩu</FormInput>
                    </div>
                    <div className={cx('register-item', 'd-flex', 'justify-content-between')}>
                        <div>
                            <input type="checkbox" />
                            <i className={cx('checkbox-mess')}>Lưu trạng thái đăng nhập trong 30 ngày</i>
                        </div>
                        <div>
                            <Link to="/" className={cx('pass-retrieval')}>
                                <i>Lấy lại mật khẩu</i>
                            </Link>
                        </div>
                    </div>
                    <div className={cx('text-center', 'register-button')}>
                        <button className={cx('button-login', 'btn', 'mt-4')}>Đăng nhập</button>
                    </div>
                    <p className={cx('mt-4', 'register-mess')}>
                        Bạn chưa có Tài khoản? Vui lòng đăng ký Tài khoản mới
                        <span>
                            <Link to="/register"> tại đây.</Link>
                        </span>
                    </p>
                </div>
            </div>
        </form>
    );
}

export default Login;
