import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '~/components/ProductItem/ProductItem';
import httpRequest from '~/ultis/httpRequest';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);
function HomePage() {
    const [newestProducts, setNewestProducts] = useState([]);
    const [bestSoldProducts, setBestSoldProducts] = useState([]);

    useEffect(() => {
        const getNewestProducts = async () => {
            try {
                const res = await httpRequest.get('/product/newest');
                setNewestProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getNewestProducts();

        const getBestSoldProducts = async () => {
            try {
                const res = await httpRequest.get('/product/bestsold');
                setBestSoldProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBestSoldProducts();
    }, []);

    return (
        <>
            <div className={cx('banner')}>
                <img src={require('~/assets/images/Banner.png')} alt="Banner home page" />
            </div>
            <div className={cx('ship')}>
                <div className={cx('container-fluid')}>
                    <div className={cx('row')}>
                        <div className={cx('col-md-3', 'ship-item')}>
                            <div className={cx('d-flex', 'justify-content-center')}>
                                <div className={cx('ship-img')}>
                                    <img src={require('~/assets/images/ShipImg.png')} alt="ship-img" />
                                </div>
                                <div className={cx('ship-content')}>
                                    <p>
                                        <b>Ship COD toàn quốc</b>
                                    </p>
                                    <p>Thanh toán khi nhận hàng</p>
                                    <p>Phí 20k - 25k</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-md-3', 'ship-item')}>
                            <div className={cx('d-flex', 'justify-content-center')}>
                                <div className={cx('ship-img')}>
                                    <img src={require('~/assets/images/DoiTraImg.png')} alt="ship-img" />
                                </div>
                                <div className={cx('ship-content')}>
                                    <p>
                                        <b>Miễn phí đổi - trả</b>
                                    </p>
                                    <p>Đối với sản phẩm lỗi sản xuất</p>
                                    <p>hoặc vận chuyển</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-md-3', 'ship-item')}>
                            <div className={cx('d-flex', 'justify-content-center')}>
                                <div className={cx('ship-img')}>
                                    <img src={require('~/assets/images/UuDaiImg.png')} alt="ship-img" />
                                </div>
                                <div className={cx('ship-content')}>
                                    <p>
                                        <b>Ưu đãi thành viên</b>
                                    </p>
                                    <p>Đăng ký thành viên nhận</p>
                                    <p>nhiều ưu đãi lớn</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-md-3', 'ship-item')}>
                            <div className={cx('d-flex', 'justify-content-center')}>
                                <div className={cx('ship-img')}>
                                    <img src={require('~/assets/images/ComboImg.png')} alt="ship-img" />
                                </div>
                                <div className={cx('ship-content')}>
                                    <p>
                                        <b>Ưu đãi combo</b>
                                    </p>
                                    <p>Mua theo combo, càng</p>
                                    <p>mua càng rẻ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('product')}>
                    <div className={cx('d-flex', 'justify-content-center')}>
                        <div className={cx('title-product')}>
                            <p>SẢN PHẨM MỚI VỀ</p>
                        </div>
                    </div>
                    <div className={cx('product-list')}>
                        <div className={cx('row')}>
                            {bestSoldProducts.map((prods) =>
                                prods.inStock === true ? (
                                    <ProductItem
                                        key={prods?._id}
                                        to={`/${prods.category.slug}/${prods.slug}`}
                                        title={prods.title}
                                        imgURL={prods.image}
                                        price={prods.price}
                                        id={prods?._id}
                                    />
                                ) : (
                                    ''
                                ),
                            )}
                        </div>
                    </div>
                    <div className={cx('mt-5')}>
                        <div className={cx('row')}>
                            <div className={cx('col-md-6')}>
                                <img
                                    src={require('~/assets/images/homepage-img-1.png')}
                                    style={{ width: '100%' }}
                                    alt="homepageimage"
                                />
                            </div>
                            <div className={cx('col-md-6')}>
                                <img
                                    src={require('~/assets/images/homepage-img-2.png')}
                                    style={{ width: '100%' }}
                                    alt="homepageimage"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('d-flex', 'justify-content-center')}>
                        <div className={cx('title-product')}>
                            <p>SẢN PHẨM BÁN CHẠY NHẤT</p>
                        </div>
                    </div>
                    <div className={cx('product-list')}>
                        <div className={cx('row')}>
                            {newestProducts.map((prods) =>
                                prods.inStock === true ? (
                                    <ProductItem
                                        key={prods?._id}
                                        to={`/${prods.category.slug}/${prods.slug}`}
                                        title={prods.title}
                                        imgURL={prods.image}
                                        price={prods.price}
                                        id={prods?._id}
                                    />
                                ) : (
                                    ''
                                ),
                            )}
                        </div>
                    </div>
                </div>

                <div className={cx('news')}>
                    <div className={cx('row', 'mt-5')}>
                        <div className={cx('col-lg-5', 'col-md-12')}>
                            <img
                                src={require('~/assets/images/homepage-img-3.png')}
                                style={{ width: '100%' }}
                                alt="homepageimage"
                            />
                        </div>
                        <div className={cx('col-lg-7', 'col-md-12')}>
                            <div className={cx('new-content')}>
                                <h3>Sophia - Save The Best For You</h3>
                                <p>Chỉ là một câu chuyện nhỏ để các bạn hiểu được mình sẽ tìm được gì tại Sophia...</p>
                                <p>Tại sao Sophia lại chỉ muốn là một cửa hàng nhỏ chứ không phải một drugstores?</p>
                                <p>“Save The Best For You” – Slogan cũng như định hướng hoạt động của Sophia.</p>
                                <p>Chúng mình làm việc với mục tiêu và định hướng là mang đến những sản phẩm tốt </p>
                                <p>nhất đến tay mỗi người. Nên có thể tại Sophia bạn không thể tìm thấy đa dạng sản </p>
                                <p>phẩm như ở một drugstores, bởi vì những gì “tốt nhất”, Sophia đã “chọn lọc” sẵn </p>
                                <p>cho các bạn rồi.</p>

                                <button type="button" className={cx('btn', 'btn-warning')}>
                                    <Link to="/about">Xem thêm</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
