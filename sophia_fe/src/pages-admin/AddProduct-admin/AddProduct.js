import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import styles from './AddProduct.module.scss';
import httpRequest from '~/ultis/httpRequest';

const cx = classNames.bind(styles);

function AddProduct() {
    const { register, handleSubmit } = useForm({ mode: 'onSubmit' });

    const category = useSelector((state) => state.category.category);

    const onSubmit = async (data) => {
        if (window.confirm('Thêm sản phẩm mới?')) {
            try {
                const formDt = new FormData();
                formDt.append('title', data.title);
                formDt.append('desc', data.desc);
                formDt.append('image', data.image[0]);
                formDt.append('price', data.price);
                formDt.append('quantity', data.quantity);
                formDt.append('category', data.category);

                await httpRequest.post('/product/add', formDt);
                alert('Thêm sản phẩm mới thành công!');
            } catch (error) {
                alert(error);
            }
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <h3>Thêm sản phẩm mới </h3>
            </div>
            <div>
                <form encType="multipart/form-data" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('mt-4')}>
                        <p>Tên sản phẩm</p>
                        <input
                            type="text"
                            name="title"
                            placeholder="Nhập tên sản phẩm..."
                            {...register('title', {
                                required: { value: true, message: 'Vui lòng nhập đầy đủ thông tin' },
                            })}
                        />
                    </div>
                    <div className={cx('mt-4')}>
                        <p>Hình ảnh sản phẩm</p>
                        <input
                            type="file"
                            name="image"
                            placeholder="Nhập tên sản phẩm..."
                            {...register('image', {
                                required: { value: true, message: 'Vui lòng nhập đầy đủ thông tin' },
                            })}
                        />
                    </div>
                    <div className={cx('mt-4')}>
                        <p>Giá sản phẩm</p>
                        <input
                            type="number"
                            name="price"
                            placeholder="Nhập giá sản phẩm..."
                            {...register('price', {
                                required: { value: true, message: 'Vui lòng nhập đầy đủ thông tin' },
                            })}
                        />
                    </div>
                    <div className={cx('mt-4')}>
                        <p>Mô tả sản phẩm</p>
                        <textarea
                            rows="4"
                            name="desc"
                            placeholder="Mô tả... (Không bắt buộc)"
                            {...register('desc', { maxLength: 1000 })}
                        ></textarea>
                    </div>
                    <div className={cx('mt-4')}>
                        <p>Số lượng sản phẩm</p>
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Nhập số lượng sản phẩm..."
                            {...register('quantity', {
                                required: { value: true, message: 'Vui lòng nhập đầy đủ thông tin' },
                            })}
                        />
                    </div>
                    <div className={cx('mt-4')}>
                        <p>Danh mục sản phẩm</p>
                        <select {...register('category')}>
                            {category.map((cate) => (
                                <option key={cate._id} value={cate._id}>
                                    {cate.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className={cx('mt-4')} type="submit">
                        Thêm sản phẩm
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;
