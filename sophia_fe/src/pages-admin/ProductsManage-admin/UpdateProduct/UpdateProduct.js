import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import httpRequest from '~/ultis/httpRequest';
import styles from './UpdateProduct.module.scss';

const cx = classNames.bind(styles);

function UpdateProduct() {
    let prodid = window.location.pathname.split('/')[3];

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [desc, setDesc] = useState('');
    const [instock, setInstock] = useState(true);

    useEffect(() => {
        const getDetail = async () => {
            const res = await httpRequest.get('/product/' + prodid);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setQuantity(res.data.quantity);
            setDesc(res.data.desc);
        };
        getDetail();
    }, [prodid]);

    const handleInstockChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === 'true') {
            setInstock(true);
        } else {
            setInstock(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (window.confirm('Bạn muốn cập nhật sản phẩm với thông tin này?')) {
                const updateDetail = {
                    title: title,
                    price: price,
                    quantity: quantity,
                    desc: desc,
                    inStock: instock,
                };
                await httpRequest.patch('/product/update/' + prodid, updateDetail);
                alert('Cập nhật thông tin sản phẩm thành công');
                setTitle('');
                setPrice(0);
                setDesc('');
                setQuantity(0);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <h3>Chỉnh sửa thông tin sản phẩm</h3>
            </div>
            <div>
                <form method="POST" onSubmit={handleSubmit}>
                    <div className={cx('mt-4')}>
                        <p>Tên sản phẩm</p>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Nhập tên sản phẩm..."
                        />
                    </div>
                    <div className={cx('mt-4')}>
                        <p>Giá sản phẩm</p>
                        <input
                            type="number"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Nhập giá sản phẩm..."
                        />
                    </div>
                    <div className={cx('mt-4')}>
                        <p>Số lượng sản phẩm</p>
                        <input
                            type="number"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="Nhập số lượng sản phẩm..."
                        />
                    </div>
                    <div className={cx('mt-4')}>
                        <p>Lên kệ hàng:</p>
                        <select onChange={handleInstockChange}>
                            <option value={true}>Có</option>
                            <option value={false}>Không</option>
                        </select>
                    </div>
                    <div className={cx('mt-4')}>
                        <p>Mô tả sản phẩm</p>
                        <textarea
                            rows="4"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            name="desc"
                            placeholder="Mô tả... (Không bắt buộc)"
                        ></textarea>
                    </div>
                    <button className={cx('mt-4')} type="submit">
                        Chỉnh sửa thông tin sản phẩm
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateProduct;
