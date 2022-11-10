import classNames from 'classnames/bind';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormInput } from '~/components/FormInput/FormInput';
import styles from './OrderPage.module.scss';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function OrderPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const products = useSelector((state) => state.cart.products);

    const [name, setName] = useState(currentUser.name);
    const [phone, setPhone] = useState(currentUser.phone);
    const [address, setAddress] = useState(currentUser.address);
    const [note, setNote] = useState();
    const [payment, setPayment] = useState('cod');
    const [qrDisplay, setQRDisplay] = useState('none');
    const [disable, setDisable] = useState();

    const handleNameChange = (e) => {
        const name = e.target.value;
        if (!name.startsWith(' ')) {
            setName(name);
        }
    };

    const handlePhoneChange = (e) => {
        const phone = e.target.value;
        if (!phone.startsWith(' ')) {
            setPhone(phone);
        }
    };

    const handleAddressChange = (e) => {
        const address = e.target.value;
        if (!address.startsWith(' ')) {
            setAddress(address);
        }
    };

    const handleNoteChange = (e) => {
        const note = e.target.value;
        if (!note.startsWith(' ')) {
            setNote(note);
        }
    };

    const TOTAL_PROD = products.reduce((total, product) => total + product.quantity * product.productID.price, 0) || 0;

    const SHIPPING_FEE = 25000;

    const TOTAL_MONEY = TOTAL_PROD + SHIPPING_FEE;

    const onSubmit = (data) => {
        console.log(data);
    };

    const quicklinkQR = `https://img.vietqr.io/image/MB-0040128026969-compact2.png?amount=${TOTAL_MONEY}&addInfo=${`${name} ${phone} Sophia`}&accountName=NGUYEN%20THIEN%20KHOA`;

    const handleCodClick = () => {
        setPayment('cod');
        setQRDisplay('none');
    };

    const handleBankingClick = () => {
        setPayment('banking');
        setQRDisplay('block');
    };

    console.log(payment);

    return (
        <form className={cx('container')} onSubmit={handleSubmit(onSubmit)}>
            <div className={cx('feature')}>
                <p className={cx('pathtitle')}>Trang chủ / Đặt hàng</p>

                <div className={cx('row')}>
                    <div className={cx('col-lg-7')}>
                        <p className={cx('title')}>Thông tin nhận hàng</p>
                        <div className={cx('register-item')}>
                            <FormInput
                                type="text"
                                name="name"
                                defaultValue={name}
                                onChange={handleNameChange}
                                {...register('name', {
                                    required: { value: true, message: 'Vui lòng nhập đầy đủ thông tin' },
                                })}
                            >
                                Tên người nhận hàng
                            </FormInput>
                        </div>
                        <div className={cx('register-item')}>
                            <FormInput
                                type="text"
                                name="phone"
                                defaultValue={phone}
                                onChange={handlePhoneChange}
                                onSubmit={handleSubmit(onSubmit)}
                                {...register('phone', {
                                    required: { value: true, message: 'Vui lòng nhập đầy đủ thông tin' },
                                })}
                            >
                                Số điện thoại
                            </FormInput>
                        </div>
                        <div className={cx('register-item')}>
                            <FormInput
                                type="text"
                                name="address"
                                defaultValue={address}
                                onChange={handleAddressChange}
                                {...register('address', {
                                    required: { value: true, message: 'Vui lòng nhập đầy đủ thông tin' },
                                })}
                            >
                                Địa chỉ chi tiết nhận hàng
                            </FormInput>
                        </div>

                        <div className={cx('register-item')}>
                            <textarea
                                className={cx('form-control')}
                                rows="4"
                                placeholder="Ghi chú... (Không bắt buộc)"
                                value={note}
                                onChange={handleNoteChange}
                            ></textarea>
                        </div>
                        <div className={cx('error-container', 'text-center')}>
                            {(errors.name?.type === 'required' ||
                                errors.phone?.type === 'required' ||
                                errors.address?.type === 'required') && (
                                <p className={cx('error-mess')}>Vui lòng điền đầy đủ thông tin trên để nhận hàng</p>
                            )}
                        </div>
                        <p className={cx('title', 'mt-5')}>Hình thức thanh toán</p>
                        <div className={cx('row', 'mt-2')}>
                            <div className={cx('col-md-6', 'mt-2')}>
                                <button className={cx('pay-item')} onClick={handleCodClick} type="button">
                                    <div className={cx('d-flex', 'pt-3')}>
                                        <img src={require('~/assets/images/codLogo.png')} alt="cod logo" />
                                        <p className={cx('pt-1')}>
                                            Thanh toán khi nhận hàng <br /> (COD)
                                        </p>
                                    </div>
                                </button>
                            </div>
                            <div className={cx('col-md-6', 'mt-2')}>
                                <button className={cx('pay-item')} onClick={handleBankingClick} type="button">
                                    <div className={cx('d-flex', 'pt-3')}>
                                        <img src={require('~/assets/images/vietqrLogo.png')} alt="vietqr logo" />
                                        <p>
                                            Thanh toán bằng chuyển khoản <br /> qua quét mã QR
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className={cx('mt-2', 'banking-payment')} style={{ display: qrDisplay }}>
                            <img src={quicklinkQR} alt="banking payment" />
                        </div>
                        <button className={cx('order-btn', 'mt-4')} type="submit">
                            Xác nhận thanh toán và đặt hàng
                        </button>
                    </div>
                    <div className={cx('col-lg-5')}>
                        <div className={cx('my-order')}>
                            <p className={cx('title')}>Đơn hàng của bạn</p>
                            {products.map((product) => (
                                <div key={product?._id}>
                                    <div className={cx('d-flex', 'mt-4')}>
                                        <div className={cx('pt-1', 'me-4')}>
                                            <img
                                                alt={product.productID.title}
                                                src={`data:image/png;base64,${btoa(
                                                    String.fromCharCode(
                                                        ...new Uint8Array(product.productID.image.data.data),
                                                    ),
                                                )}`}
                                                style={{ width: '100px' }}
                                            />
                                        </div>
                                        <div style={{ width: '100%' }}>
                                            <p>{product.productID.title}</p>
                                            <p>{product.option}</p>
                                            <div className={cx('d-flex', 'justify-content-between')}>
                                                <p>Số lượng: {product.quantity}</p>
                                                <p style={{ color: 'red', fontWeight: 'bold' }}>
                                                    Đơn giá:{' '}
                                                    {new Intl.NumberFormat('vi-VI', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    }).format(product.productID.price)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr
                                        className={cx('mt-4')}
                                        style={{ color: '#1F601F', height: '1px', opacity: '1' }}
                                    />
                                </div>
                            ))}
                            <div className={cx('mt-4')}>
                                <Link to="/">
                                    <button className={cx('shopping-btn')}>
                                        <FontAwesomeIcon icon={faArrowLeftLong} />
                                        Tiếp tục mua hàng
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className={cx('mt-4', 'my-order')}>
                            <p className={cx('text-center')}>
                                <i>Thêm dấu phẩy giữa các mã để sử dụng nhiều mã</i>
                            </p>
                            <div className={cx('register-item', 'coupon')}>
                                <input className={cx('form-control')} placeholder="Mã giảm giá" />
                            </div>
                            <div className={cx('d-flex', 'justify-content-between', 'mt-3')}>
                                <p>Tổng giá trị đơn:</p>
                                <p>
                                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                        TOTAL_PROD,
                                    )}
                                </p>
                            </div>
                            <div className={cx('d-flex', 'justify-content-between', 'mt-3')}>
                                <p>Phí giao hàng:</p>
                                <p>
                                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                        SHIPPING_FEE,
                                    )}
                                </p>
                            </div>
                            <div className={cx('d-flex', 'justify-content-between', 'mt-3')}>
                                <p>Mã giảm giá:</p>
                            </div>
                            <hr className={cx('mt-4')} style={{ color: '#1F601F', height: '1px', opacity: '1' }} />
                            <div className={cx('d-flex', 'justify-content-between', 'mt-3')}>
                                <p>Tổng thanh toán:</p>
                                <p style={{ color: 'red', fontWeight: 'bold' }}>
                                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                        TOTAL_MONEY,
                                    )}
                                </p>
                            </div>
                            <div className={cx('d-flex', 'justify-content-between', 'mt-3')}>
                                <p>Phương thức thanh toán:</p>
                                <p>
                                    {payment === 'cod'
                                        ? 'Thanh toán khi nhận hàng (COD)'
                                        : 'Thanh toán bằng chuyển khoản QR'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default OrderPage;
