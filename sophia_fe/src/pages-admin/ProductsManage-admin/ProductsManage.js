import classNames from 'classnames/bind';
import styles from './ProductsManage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { adGetProds } from '~/redux/apiResquest';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function ProductsManage() {
    const category = useSelector((state) => state.category.category);

    const [cate, setCate] = useState('');

    const prods = useSelector((state) => state.admin.prodmanage.prods);

    const dispatch = useDispatch();

    useEffect(() => {
        adGetProds(dispatch, cate);
    }, [dispatch, cate]);

    const handleCateSelectChanged = (e) => {
        setCate(e.target.value);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <h3>Danh sách sản phẩm </h3>
            </div>
            <div className={cx('mt-4', 'content')}>
                <div className={cx('cate-select')}>
                    <span>Danh mục sản phẩm: </span>
                    <select onChange={handleCateSelectChanged}>
                        <option value="">Tất cả </option>
                        {category.map((cate) => (
                            <option key={cate._id} value={cate._id}>
                                {cate.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={cx('mt-4', 'prods-table')}>
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên sản phẩm </th>
                                <th>Danh mục</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Đã bán</th>
                                <th>Trên kệ?</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {prods.map((prod, index) => (
                                <tr key={prod._id}>
                                    <td>{index + 1}</td>
                                    <td>{prod.title}</td>
                                    <td>{prod.category.title}</td>
                                    <td>
                                        {prod.quantity !== 0 ? (
                                            prod.quantity
                                        ) : (
                                            <p style={{ color: 'red', marginBottom: 0 }}>Hết hàng</p>
                                        )}
                                    </td>
                                    <td>{prod.price}</td>
                                    <td>{prod.sold}</td>
                                    <td>{prod.inStock ? 'Có' : 'Không'}</td>
                                    <td>
                                        <Link to={`/admin/update/${prod._id}`}>Sửa</Link>
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

export default ProductsManage;
