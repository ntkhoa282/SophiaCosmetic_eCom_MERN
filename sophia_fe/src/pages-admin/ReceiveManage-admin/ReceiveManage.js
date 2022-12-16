import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import httpRequest from '~/ultis/httpRequest';
import styles from './ReceiveManage.module.scss';
import { useDispatch } from 'react-redux';
import { adGetReceiveDetail } from '~/redux/apiResquest';

const cx = classNames.bind(styles);

function ReceiveManage() {
    const [receiveList, setReceiveList] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const getReceive = async () => {
            const res = await httpRequest.get('/receive');
            setReceiveList(res.data);
        };
        getReceive();
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <h3>Danh sách đơn nhập hàng </h3>
            </div>
            <div className={cx('mt-4', 'content')}>
                <div>
                    <Link className={cx('addreceive')} to="/admin/receivemanage/addreceive">
                        + Thêm mới đơn nhập hàng
                    </Link>
                </div>
            </div>
            <div className={cx('mt-4')}>
                <p className={cx('his')}>Lịch sử nhập hàng</p>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>Ngày nhập</td>
                                <td>Tên nhà cung cấp</td>
                                <td>Số điện thoại</td>
                                <td>Số mặt hàng nhập</td>
                                <td>Tổng tiền nhập</td>
                            </tr>
                        </thead>
                        <tbody>
                            {receiveList.map((rec, index) => (
                                <tr key={rec._id}>
                                    <td>{index + 1}</td>
                                    <td>{new Date(rec.createdAt).toLocaleDateString('vi-VN').substring(0, 10)}</td>
                                    <td>{rec.providerName}</td>
                                    <td>{rec.providerPhone}</td>
                                    <td>{rec.productsImport.length}</td>
                                    <td>
                                        {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                                            rec.totalImport,
                                        )}
                                    </td>
                                    <td>
                                        <Link
                                            to={`/admin/receive/${rec._id}`}
                                            onClick={() => {
                                                adGetReceiveDetail(dispatch, rec._id);
                                            }}
                                        >
                                            Xem chi tiết
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ReceiveManage;
