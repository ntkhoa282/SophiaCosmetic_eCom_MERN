import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormInput } from '~/components/FormInput/FormInput';
import styles from './OrderPage.module.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { createUserOrder, getUserCart } from '~/redux/apiResquest';

const cx = classNames.bind(styles);
function OrderPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const products = useSelector((state) => state.cart.products);

    const TOTAL_PROD = products.reduce((total, product) => total + product.quantity * product.productID.price, 0) || 0;

    const SHIPPING_FEE = 25000;

    const TOTAL_MONEY = TOTAL_PROD + SHIPPING_FEE;

    const [name, setName] = useState(currentUser.name);
    const [phone, setPhone] = useState(currentUser.phone);
    const [address, setAddress] = useState(currentUser.address);
    const [note, setNote] = useState();
    const [payment, setPayment] = useState('cod');
    const [qrDisplay, setQRDisplay] = useState('none');

    const quicklinkQR = `https://img.vietqr.io/image/MB-0040128026969-compact2.png?amount=${TOTAL_MONEY}&addInfo=${`${name} ${phone} Sophia`}&accountName=NGUYEN%20THIEN%20KHOA`;

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

    const handleCodClick = () => {
        setPayment('cod');
        setQRDisplay('none');
    };

    const handleBankingClick = () => {
        setPayment('banking');
        setQRDisplay('block');
    };

    let productList = products.map((product) => ({
        productId: product.productID._id,
        quantity: product.quantity,
        option: product.option,
    }));

    const onSubmit = (data) => {
        const newOrder = {
            userID: currentUser._id,
            name: data.name,
            phone: data.phone,
            address: data.address,
            products: productList,
            total: TOTAL_MONEY,
            payment: payment,
        };
        createUserOrder(dispatch, newOrder, navigate);
        getUserCart(dispatch, currentUser._id);
    };

    return (
        <form className={cx('container')} onSubmit={handleSubmit(onSubmit)}>
            <div className={cx('feature')}>
                <p className={cx('pathtitle')}>Trang ch??? / ?????t h??ng</p>

                <div className={cx('row')}>
                    <div className={cx('col-lg-7')}>
                        <p className={cx('title')}>Th??ng tin nh???n h??ng</p>
                        <div className={cx('register-item')}>
                            <FormInput
                                type="text"
                                name="name"
                                defaultValue={name}
                                onChange={handleNameChange}
                                {...register('name', {
                                    required: { value: true, message: 'Vui l??ng nh???p ?????y ????? th??ng tin' },
                                })}
                            >
                                T??n ng?????i nh???n h??ng
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
                                    required: { value: true, message: 'Vui l??ng nh???p ?????y ????? th??ng tin' },
                                })}
                            >
                                S??? ??i???n tho???i
                            </FormInput>
                        </div>
                        <div className={cx('register-item')}>
                            <FormInput
                                type="text"
                                name="address"
                                defaultValue={address}
                                onChange={handleAddressChange}
                                {...register('address', {
                                    required: { value: true, message: 'Vui l??ng nh???p ?????y ????? th??ng tin' },
                                })}
                            >
                                ?????a ch??? chi ti???t nh???n h??ng
                            </FormInput>
                        </div>

                        <div className={cx('register-item')}>
                            <textarea
                                className={cx('form-control')}
                                rows="4"
                                placeholder="Ghi ch??... (Kh??ng b???t bu???c)"
                                value={note}
                                onChange={handleNoteChange}
                            ></textarea>
                        </div>
                        <div className={cx('error-container', 'text-center')}>
                            {(errors.name?.type === 'required' ||
                                errors.phone?.type === 'required' ||
                                errors.address?.type === 'required') && (
                                <p className={cx('error-mess')}>Vui l??ng ??i???n ?????y ????? th??ng tin tr??n ????? nh???n h??ng</p>
                            )}
                        </div>
                        <p className={cx('title', 'mt-5')}>H??nh th???c thanh to??n</p>
                        <div className={cx('row', 'mt-2')}>
                            <div className={cx('col-md-6', 'mt-2')}>
                                <button className={cx('pay-item')} onClick={handleCodClick} type="button">
                                    <div className={cx('d-flex', 'pt-3')}>
                                        <img src={require('~/assets/images/codLogo.png')} alt="cod logo" />
                                        <p className={cx('pt-1')}>
                                            Thanh to??n khi nh???n h??ng <br /> (COD)
                                        </p>
                                    </div>
                                </button>
                            </div>
                            <div className={cx('col-md-6', 'mt-2')}>
                                <button className={cx('pay-item')} onClick={handleBankingClick} type="button">
                                    <div className={cx('d-flex', 'pt-3')}>
                                        <img src={require('~/assets/images/vietqrLogo.png')} alt="vietqr logo" />
                                        <p>
                                            Thanh to??n b???ng chuy???n kho???n <br /> qua qu??t m?? QR
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className={cx('mt-2', 'banking-payment')} style={{ display: qrDisplay }}>
                            <img src={quicklinkQR} alt="banking payment" />
                        </div>
                        <button className={cx('order-btn', 'mt-4')} type="submit">
                            X??c nh???n thanh to??n v?? ?????t h??ng
                        </button>
                    </div>
                    <div className={cx('col-lg-5')}>
                        <div className={cx('my-order')}>
                            <p className={cx('title')}>????n h??ng c???a b???n</p>
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
                                                <p>S??? l?????ng: {product.quantity}</p>
                                                <p style={{ color: 'red', fontWeight: 'bold' }}>
                                                    ????n gi??:{' '}
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
                                        Ti???p t???c mua h??ng
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className={cx('mt-4', 'my-order')}>
                            <p className={cx('text-center')}>
                                <i>Th??m d???u ph???y gi???a c??c m?? ????? s??? d???ng nhi???u m??</i>
                            </p>
                            <div className={cx('register-item', 'coupon')}>
                                <input className={cx('form-control')} placeholder="M?? gi???m gi??" />
                            </div>
                            <div className={cx('d-flex', 'justify-content-between', 'mt-3')}>
                                <p>T???ng gi?? tr??? ????n:</p>
                                <p>
                                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                        TOTAL_PROD,
                                    )}
                                </p>
                            </div>
                            <div className={cx('d-flex', 'justify-content-between', 'mt-3')}>
                                <p>Ph?? giao h??ng:</p>
                                <p>
                                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                        SHIPPING_FEE,
                                    )}
                                </p>
                            </div>
                            <div className={cx('d-flex', 'justify-content-between', 'mt-3')}>
                                <p>M?? gi???m gi??:</p>
                            </div>
                            <hr className={cx('mt-4')} style={{ color: '#1F601F', height: '1px', opacity: '1' }} />
                            <div className={cx('d-flex', 'justify-content-between', 'mt-3')}>
                                <p>T???ng thanh to??n:</p>
                                <p style={{ color: 'red', fontWeight: 'bold' }}>
                                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                        TOTAL_MONEY,
                                    )}
                                </p>
                            </div>
                            <div className={cx('d-flex', 'justify-content-between', 'mt-3')}>
                                <p>Ph????ng th???c thanh to??n:</p>
                                <p>
                                    {payment === 'cod'
                                        ? 'Thanh to??n khi nh???n h??ng (COD)'
                                        : 'Thanh to??n b???ng chuy???n kho???n QR'}
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
