import classNames from 'classnames/bind';
import styles from './ReceiveDetail.module.scss';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function ReceiveDetail() {
    let detail = useSelector((state) => state.admin.receivemanage.detail);

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <h3>
                    Chi tiết đơn nhập hàng <span>#{detail._id}</span>{' '}
                </h3>
                <p>Ngày nhập: {new Date(detail.createdAt).toLocaleDateString('vi-VN').substring(0, 10)}</p>
                <hr />
            </div>
            <div className={cx('mt-3', 'acc-order')}>
                <div>
                    <h5>Thông tin nhà cung cấp</h5>
                    <p>
                        Tên nhà cung cấp: <span>{detail.providerName}</span>
                    </p>
                    <p>
                        SDT: <span>{detail.providerPhone}</span>
                    </p>
                </div>
                <hr />
            </div>
            <div className={cx('mt-3', 'receive-order')}>
                <div className={cx('mt-3', 'prod-list')}>
                    <h5>Danh sách sản phẩm</h5>
                    <table>
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>Tên sản phẩm</td>
                                <td>Số lượng nhập</td>
                                <td>Đơn giá đơn giá nhập</td>
                            </tr>
                        </thead>
                        <tbody>
                            {detail.productsImport.map((prod, index) => (
                                <tr key={prod._id}>
                                    <td>{index + 1}</td>
                                    <td>{prod.productId.title}</td>
                                    <td>{prod.quantityImport}</td>
                                    <td>
                                        {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                            prod.priceImport,
                                        )}
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <th colSpan="4" style={{ color: 'Red', textAlign: 'right', paddingRight: '25px' }}>
                                    Tổng tiền:{' '}
                                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                        detail.totalImport,
                                    )}
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ReceiveDetail;
