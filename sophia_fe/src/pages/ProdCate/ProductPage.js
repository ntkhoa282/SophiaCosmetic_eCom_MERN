import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductPage.module.scss';

import Sidebar from '~/components/Sidebar/Sidebar';
import ProdList from './ProdList';

const cx = classNames.bind(styles);

function ProductPage() {
    const cate = useSelector((state) => state.category.category);
    const location = useLocation();
    const cateSlug = location.pathname.split('/')[1];
    let cateID;
    switch (cateSlug) {
        case 'son-moi': {
            cateID = cate[0]?._id;
            break;
        }
        case 'ke-mat': {
            cateID = cate[1]?._id;
            break;
        }
        case 'che-khuyet-diem': {
            cateID = cate[2]?._id;
            break;
        }
        case 'phan-ma-hong': {
            cateID = cate[3]?._id;
            break;
        }
        default:
            break;
    }
    return (
        <div className={cx('container')}>
            <div className={cx('feature')}>
                <div className={cx('row')}>
                    <div className={cx('col-md-4')}>
                        <Sidebar />
                    </div>
                    <div className={cx('col-md-8')}>
                        <ProdList category={cateID} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
