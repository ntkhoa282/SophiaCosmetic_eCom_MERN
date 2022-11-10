import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { FormInput } from '~/components/FormInput/FormInput';
import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { loginUser } from '~/redux/apiResquest';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const onSubmit = (data) => {
        const user = {
            username: data.username,
            password: data.password,
        };
        loginUser(user, dispatch, navigate);
    };

    return (
        <form action="" method="POST" className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
            <div className={cx('content')}>
                <Link to="/">
                    <img className={cx('logo')} src={require('~/assets/LogoGreen.svg').default} alt="logo" />
                </Link>
                <div className={cx('register')}>
                    <h6>Đăng nhập</h6>
                    <div className={cx('register-item')}>
                        <FormInput
                            name="username"
                            type="text"
                            {...register('username', {
                                required: { value: true, message: 'Vui lòng nhập đầy đủ thông tin' },
                            })}
                        >
                            Tên đăng nhập
                        </FormInput>
                    </div>
                    <div className={cx('register-item')}>
                        <FormInput
                            name="password"
                            type="password"
                            {...register('password', {
                                required: { value: true, message: 'Vui lòng nhập đầy đủ thông tin' },
                            })}
                        >
                            Mật khẩu
                        </FormInput>
                    </div>
                    <div className={cx('error-container')}>
                        {(errors.username?.type === 'required' || errors.password?.type === 'required') && (
                            <p className={cx('error-mess')}>Vui lòng điền đầy đủ thông tin</p>
                        )}
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
                        <button className={cx('button-login', 'btn', 'mt-4')} type="submit">
                            Đăng nhập
                        </button>
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
