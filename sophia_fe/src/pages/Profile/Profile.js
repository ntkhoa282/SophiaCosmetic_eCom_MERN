import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Profile.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { updateInfo } from '~/redux/apiResquest';
import { createAxios } from '~/ultis/createInstance';
import { updateInfoSuccess } from '~/redux/userSlice';

const cx = classNames.bind(styles);
function Profile() {
    const user = useSelector((state) => state.auth.login.currentUser);

    const id = user?._id;
    const accessToken = user?.accessToken;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, updateInfoSuccess);

    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address);
    const [birthday, setBirtday] = useState(user.birthday);

    const handleSumbit = (e) => {
        e.preventDefault();
        const info = {
            name: name,
            phone: phone,
            email: email,
            address: address,
            birthday: birthday,
        };
        updateInfo(dispatch, id, info, navigate, accessToken, axiosJWT);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('feature')}>
                <h4 className={cx('text-center')}>Thông tin tài khoản</h4>
                <div className={cx('row', 'mt-5')}>
                    <div className={cx('col-lg-4', 'col-md-5')}>
                        <div className={cx('information')}>
                            <p>Xin chào, </p>
                            <span className={cx('name')}>
                                <b>{name}</b>
                            </span>
                            <hr className={cx('mt-3')} style={{ color: '#1F601F', height: '1px', opacity: '1' }} />
                            <Link to="/profile">
                                <div className={cx('d-flex', 'mt-4')}>
                                    <div className={cx('me-5')}>
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <div>
                                        <b>Thông tin cá nhân</b>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/my-order">
                                <div className={cx('d-flex', 'mt-4')}>
                                    <div className={cx('me-5')}>
                                        <FontAwesomeIcon icon={faReceipt} />
                                    </div>
                                    <div>
                                        <b>Danh sách đơn hàng</b>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/">
                                <div className={cx('d-flex', 'mt-4')}>
                                    <div className={cx('me-5')}>
                                        <FontAwesomeIcon icon={faCommentDots} />
                                    </div>
                                    <div>
                                        <b>Đánh giá</b>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <form className={cx('col-lg-8', 'col-md-7')} action="" method="POST" onSubmit={handleSumbit}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-2', 'info-label')}>
                                <p>Họ tên</p>
                            </div>
                            <div className={cx('col-lg-10')}>
                                <div className={cx('info-input')}>
                                    <input
                                        className={cx('form-control')}
                                        value={name}
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Vui lòng điền họ và tên của bạn..."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-2', 'info-label')}>
                                <p>Số điện thoại</p>
                            </div>
                            <div className={cx('col-lg-10')}>
                                <div className={cx('info-input')}>
                                    <input
                                        className={cx('form-control')}
                                        value={phone}
                                        type="text"
                                        onChange={(e) => setPhone(e.target.value)}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-2', 'info-label')}>
                                <p>Email</p>
                            </div>
                            <div className={cx('col-lg-10')}>
                                <div className={cx('info-input')}>
                                    <input
                                        className={cx('form-control')}
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Vui lòng điền địa chỉ email của bạn..."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-2', 'info-label')}>
                                <p>Ngày sinh</p>
                            </div>
                            <div className={cx('col-lg-10')}>
                                <div className={cx('info-input')}>
                                    <input
                                        className={cx('form-control')}
                                        value={new Date(birthday).toISOString().substring(0, 10)}
                                        type="date"
                                        onChange={(e) => setBirtday(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-2', 'info-label')}>
                                <p>Địa chỉ</p>
                            </div>
                            <div className={cx('col-lg-10')}>
                                <div className={cx('info-input')}>
                                    <input
                                        className={cx('form-control')}
                                        value={address}
                                        type="text"
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Số nhà, tên đường, phường/xã, quận/huyện, thành phố..."
                                    />
                                </div>
                            </div>
                        </div>
                        <p className={cx('mt-4', 'text-center', 'change-pass')}>
                            <Link to="/">Thay đổi mật khẩu</Link>
                        </p>
                        <button type="submit" className={cx('mt-4', 'update-btn')}>
                            Cập nhật tài khoản
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
