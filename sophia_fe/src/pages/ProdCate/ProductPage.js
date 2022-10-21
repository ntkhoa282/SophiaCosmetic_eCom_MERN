import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductPage.module.scss';

import Sidebar from '~/components/Sidebar/Sidebar';
import ProdList from './ProdList';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ProductPage() {
    const cate = useSelector((state) => state.category.category);
    const location = useLocation();
    const cateSlug = location.pathname.split('/')[1];
    let cateValue;
    switch (cateSlug) {
        case 'son-moi': {
            cateValue = cate[0];
            break;
        }
        case 'ke-mat': {
            cateValue = cate[1];
            break;
        }
        case 'che-khuyet-diem': {
            cateValue = cate[2];
            break;
        }
        case 'phan-ma-hong': {
            cateValue = cate[3];
            break;
        }
        default:
            break;
    }

    const [sort, setSort] = useState();

    const handleSort = (e) => {
        let value = e.target.value;
        setSort(value);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('feature')}>
                <p className={cx('pathtitle')}>Trang chủ / {cateValue?.title}</p>
                <div className={cx('row')}>
                    <div className={cx('col-md-4')}>
                        <p className={cx('sidebar-title')}>DANH MỤC SẢN PHẨM </p>
                        <Sidebar />
                    </div>
                    <div className={cx('col-md-8')}>
                        <div className={cx('trangdiem-title', 'mt-5')}>
                            <div className={cx('d-flex', 'justify-content-between')}>
                                <div>
                                    <img alt="product list icon" src={require('~/assets/images/prodlisticon.png')} />
                                    <span className={cx('prodlist-title')}>{cateValue?.title.toUpperCase()}</span>
                                </div>
                                <div>
                                    <span>Sắp xếp theo:</span>
                                    <select id="sort" className={cx('sort-select')} onChange={handleSort}>
                                        <option>--- Sắp xếp theo ---</option>
                                        <option value="desc">Theo giá giảm dần</option>
                                        <option value="asc">Theo giá tăng dần</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <ProdList category={cateValue?._id} sort={sort} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
