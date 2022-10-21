import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductPage.module.scss';
import ProductItem from '~/components/ProductItem/ProductItem';
import httpRequest from '~/ultis/httpRequest';

const cx = classNames.bind(styles);

function ProdList({ category, sort }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await httpRequest.get(`/product?cate=${category}`);
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [category]);

    useEffect(() => {
        if (sort === 'desc') {
            setProducts([...products].sort((a, b) => b.price - a.price));
        } else if (sort === 'asc') {
            setProducts([...products].sort((a, b) => a.price - b.price));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort]);
    return (
        <div className={cx('product-list', 'mt-3')}>
            <div className={cx('row')}>
                {products.map((prods) =>
                    prods.inStock === true ? (
                        <ProductItem
                            key={prods?._id}
                            to={`/${prods.category.slug}/${prods.slug}`}
                            title={prods.title}
                            imgURL={prods.image}
                            price={prods.price}
                        />
                    ) : (
                        ''
                    ),
                )}
            </div>
        </div>
    );
}

ProdList.propTypes = {
    category: PropTypes.node,
    sort: PropTypes.string,
};

export default ProdList;
