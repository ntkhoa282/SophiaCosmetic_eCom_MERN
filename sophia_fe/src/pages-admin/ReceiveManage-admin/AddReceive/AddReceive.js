import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import httpRequest from '~/ultis/httpRequest';
import styles from './AddReceive.module.scss';

const cx = classNames.bind(styles);

let prodAddList = [];

function AddReceive() {
    const navigate = useNavigate();

    const cateList = useSelector((state) => state.category.category);

    const providerRef = useRef();
    const phoneRef = useRef();
    const prodRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const [prodList, setProdList] = useState([]);
    const [pid, setPID] = useState('');
    const [prodLabel, setProdLabel] = useState('');
    //const [prodAddList, setProdAddList] = useState([]);
    const [rowData, setRowData] = useState([]);

    const handleCateSelecteChanged = async (e) => {
        if (e.target.value !== '') {
            const res = await httpRequest.get(`/product?cate=${e.target.value}`);
            setProdList(res.data);
        }
    };

    const handleProdSelectChanged = (e) => {
        if (e.target.value !== '') {
            setPID(e.target.value);
            const index = e.nativeEvent.target.selectedIndex;
            const label = e.nativeEvent.target[index].text;
            setProdLabel(label);
        }
    };

    const addBtnClick = () => {
        const prodItem = {
            productId: pid,
            prodName: prodLabel,
            quantityImport: quantityRef.current.value,
            priceImport: priceRef.current.value,
        };
        prodAddList.push(prodItem);
        setRowData(prodAddList);
    };

    const addReceiveBtn = async () => {
        try {
            if (window.confirm('Bạn chắc chắn muốn thêm đơn nhập này?')) {
                const totalImport = prodAddList.reduce(
                    (total, prod) => total + prod.quantityImport * prod.priceImport,
                    0,
                );

                const data = {
                    providerName: providerRef.current.value,
                    providerPhone: phoneRef.current.value,
                    productsImport: prodAddList,
                    totalImport: totalImport,
                };

                await httpRequest.post('/receive/add-receive', data);
                alert('Thêm đơn nhập mới thành công!');
                navigate('/admin/receivemanage');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <h3>Thêm mới đơn nhập hàng </h3>
            </div>
            <div>
                <form>
                    <div className={cx('mt-4', 'd-flex', 'name')}>
                        <span>Tên nhà cung cấp:</span>
                        <input type="text" name="providerName" ref={providerRef} />
                    </div>
                    <div className={cx('mt-4', 'd-flex', 'phone')}>
                        <span>Số điện thoại:</span>
                        <input type="text" name="providerName" ref={phoneRef} />
                    </div>
                    <div className={cx('mt-4', 'products')}>
                        <div className={cx('add-prod')}>
                            <p>Thông tin sản phẩm:</p>
                            <div className={cx('mt-4', 'd-flex', 'cate-select')}>
                                <span>Danh mục SP:</span>
                                <select onChange={handleCateSelecteChanged}>
                                    <option value="">--- Danh mục sản phẩm ---</option>
                                    {cateList.map((cate) => (
                                        <option key={cate._id} value={cate._id}>
                                            {cate.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={cx('mt-4', 'd-flex', 'prod-select')}>
                                <span>Tên sản phẩm:</span>
                                <select onChange={handleProdSelectChanged} ref={prodRef}>
                                    <option value="">--- Tên sản phẩm ---</option>
                                    {prodList &&
                                        prodList.map((prod) => (
                                            <option key={prod._id} value={prod._id}>
                                                {prod.title}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div className={cx('mt-4', 'd-flex', 'prod')}>
                                <span>Số lượng SP:</span>
                                <input type="number" name="prodQuantity" ref={quantityRef} />
                            </div>
                            <div className={cx('mt-4', 'd-flex', 'prod')}>
                                <span>Giá nhập SP:</span>
                                <input type="number" name="prodPrice" ref={priceRef} />
                            </div>
                            <button type="button" className={cx('add-btn', 'mt-4')} onClick={addBtnClick}>
                                Thêm sản phẩm
                            </button>
                        </div>
                        <div className={cx('prod-list', 'mt-4')}>
                            <p>Danh sách sản phẩm:</p>
                            <table>
                                <thead>
                                    <tr>
                                        <td>STT</td>
                                        <td>Tên sản phẩm</td>
                                        <td>Số lượng</td>
                                        <td>Đơn giá nhập</td>
                                        <td>Thành tiền</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rowData.map((prod, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{prod.prodName}</td>
                                                <td>{prod.quantityImport}</td>
                                                <td>
                                                    {new Intl.NumberFormat('vi-VI', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    }).format(prod.priceImport)}
                                                </td>
                                                <td>
                                                    {new Intl.NumberFormat('vi-VI', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    }).format(prod.quantityImport * prod.priceImport)}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={cx('mt-5')}>
                        <button type="submit" className={cx('add-receive')} onClick={addReceiveBtn}>
                            Thêm đơn nhập hàng
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddReceive;
