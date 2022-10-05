import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { FormInput } from '~/components/FormInput/FormInput';
import styles from './Register.module.scss';
import { useForm } from 'react-hook-form';
import { registerUser } from '~/redux/apiResquest';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);
function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const newUser = {
            username: data.username,
            name: data.name,
            email: data.email,
            phone: data.tel,
            address: null,
            password: data.password,
        };
        registerUser(newUser, dispatch, navigate);
    };
    return (
        <form action="" method="POST" className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
            <div className={cx('content')}>
                <Link to="/">
                    <img className={cx('logo')} src={require('~/assets/LogoGreen.svg').default} alt="logo" />
                </Link>
                <div className={cx('register')}>
                    <h6>Đăng ký tài khoản</h6>
                    <div className={cx('register-item')}>
                        <FormInput name="name" type="text" {...register('name', { required: true })}>
                            Họ và tên
                        </FormInput>
                    </div>
                    <div className={cx('register-item')}>
                        <FormInput
                            name="tel"
                            type="text"
                            {...register('tel', {
                                required: true,
                            })}
                        >
                            Số điện thoại
                        </FormInput>
                    </div>
                    <div className={cx('register-item')}>
                        <FormInput
                            name="email"
                            type="text"
                            {...register('email', {
                                required: true,
                                // eslint-disable-next-line no-useless-escape
                                pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
                            })}
                        >
                            Email
                        </FormInput>
                    </div>
                    <div className={cx('register-item')}>
                        <FormInput
                            name="username"
                            type="text"
                            {...register('username', {
                                required: true,
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
                                pattern: { value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/ },
                            })}
                        >
                            Mật khẩu
                        </FormInput>
                    </div>
                    <div className={cx('error-container')}>
                        {(errors.name?.type === 'required' ||
                            errors.tel?.type === 'requỉed' ||
                            errors.email?.type === 'required' ||
                            errors.username?.type === 'required' ||
                            errors.password?.type === 'required') && (
                            <p className={cx('error-mess')}>Vui lòng điền đầy đủ thông tin</p>
                        )}

                        {errors.email?.type === 'pattern' && <p className={cx('error-mess')}>Email không hợp lệ</p>}
                        {errors.password?.type === 'pattern' && (
                            <p className={cx('error-mess')}>
                                Mật khẩu gồm ít nhất 8 ký tự, trong đó có ít nhất 1 chữ in hoa và 1 số
                            </p>
                        )}
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
