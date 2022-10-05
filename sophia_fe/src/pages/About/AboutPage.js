import classNames from 'classnames/bind';
import styles from './AboutPage.module.scss';

const cx = classNames.bind(styles);
function AboutPage() {
    return (
        <div className={cx('container')}>
            <div className={cx('feature')}>
                <div className={cx('best')}>
                    <h6 className={cx('mb-4')}>Sophia - Save The Best For You</h6>
                    <p>“Save The Best For You” - Slogan cũng như định hướng hoạt động của Sophia. Chúng mình</p>
                    <p>làm việc với mục tiêu và định hướng là mang những sản phẩm tốt</p>
                    <p>Sản phẩm của Sophia không nhất thiết phải là sản phẩm có công dụng tốt nhất mà phải</p>
                    <p>phù hợp 3 tiêu chí của bọn mình: Chất lượng, Giá thành và Phù hợp.</p>
                </div>
                <div className={cx('row', 'mt-5')}>
                    <div className={cx('col-md-6', 'mt-3')}>
                        <img src={require('~/assets/images/AboutImg1.png')} alt="about 1" />
                    </div>
                    <div className={cx('col-md-6', 'mt-3')}>
                        <img src={require('~/assets/images/AboutImg2.png')} alt="about 2" />
                    </div>
                </div>
                <div className={cx('row', 'mt-5')}>
                    <div className={cx('col-md-3')}>
                        <img
                            className={cx('sophiaImgBottom')}
                            src={require('~/assets/images/AboutImg3.png')}
                            alt="about 3"
                        />
                    </div>
                    <div className={cx('col-md-6')}>
                        <p>
                            Để làm được điều này mỗi một mặt hàng được đặt trên kệ của Sophia đều đã qua chọn lọc cẩn
                            thận về:{' '}
                        </p>
                        <br />
                        <p>
                            Nguồn gốc, chất lượng: Việc xem qua hầu hết những review khen hay chê, đặc biệt là việc
                            testing sản phẩm trước khi đăng bán cũng như việc chọn nguồn hàng chất lượng có vẻ đơn giản
                            nhưng lại tốn nhiều thời gian và cũng là công việc “khó khăn” nhất đối với chúng mình.
                        </p>
                        <br />
                        <p>
                            Chi phí, Giá thành: Sản phẩm tốt không hẳn phải đắt nhất, mà đối với Sophia đó là sản phẩm
                            đạt chất lượng tốt nhất so với khoảng giá hiện tại. Việc check giá cả tất cả những sản phẩm
                            cùng loại để chọn ra cái gì phù hợp cái gì không cũng là điều làm chúng mình đau đầu trước
                            khi rinh em ý về trên kệ hàng.
                        </p>
                        <br />
                        <p>
                            Phù hợp với từng người: Nếu đã mua hàng tại Sophia thì chắc bạn không lạ gì về việc có những
                            sản phẩm Sophia không nhập bán nữa mặc dù có nhiều người hỏi. Chúng mình luôn để ý đến những
                            review của người dùng là chính các bạn để điều chỉnh về hàng hóa. Hàng Sophia không nhập lại
                            không có nghĩa là sản phẩm đó Sophia không thể nhập được hoặc không có ai mua. Mà đo đơn
                            giản là những sản phẩm không còn đạt được đủ tiêu chí của bọn mình là tốt về cả chất lượng
                            với khoảng giá đó, hoặc không cho kết quả sử dụng tốt với mọi người.
                        </p>
                    </div>
                    <div className={cx('col-md-3')}></div>
                </div>
                <div className={cx('row', 'mt-5')}>
                    <div className={cx('col-md-3')}>
                        <img
                            className={cx('sophiaImgBottom')}
                            src={require('~/assets/images/AboutImg4.png')}
                            alt="about 4"
                        />
                    </div>
                    <div className={cx('col-md-6')}>
                        <p className={cx('ques')}>Bạn sẽ tìm được gì ở Sophia?</p>
                        <br />
                        <p>
                            Vậy đó, Sophia chỉ là một cửa hàng nhỏ không phải một siêu thị mỹ phẩm nên các bạn chỉ tìm
                            được những sản phẩm ĐÃ ĐƯỢC CHỌN LỌC trên kệ của chúng mình mà thôi. Sophia cũng không phải
                            là một cửa hàng chuyên Pháp, chuyên Anh hoặc Mỹ, Nhật… Chỉ đơn giản là nơi nào có sản phẩm
                            tốt phù hợp với tiêu chí ban đầu đã đặt ra thì Sophia sẽ cố gắng có được trên kệ của mình
                            cho mọi người.
                        </p>
                        <br />
                        <p>
                            Không phải ai cũng có đủ kiến thức để làm chuyên gia về skincar e hay makeup để chọn cho
                            chính bạn những sản phẩm phù hợp nhất. Tại Sophia, chúng mình luôn cố gắng để mọi người
                            không phải nghĩ về vấn đề đó. Chỉ việc đến cửa hàng để Sophia có thể tư vấn giúp bạn hoặc
                            đôi khi đơn giản là bạn “chọn bừa”, bạn vẫn sẽ có được sản phẩm “tốt” dành cho riêng bạn.
                        </p>
                        <br />
                        <p>
                            <b>
                                <i>Chúc các bạn luôn tìm được thứ tốt nhất cho mình tại cửa hàng nhỏ này.</i>
                            </b>
                        </p>
                    </div>
                    <div className={cx('col-md-3')}>
                        <img
                            className={cx('sophiaImgTop')}
                            src={require('~/assets/images/AboutImg5.png')}
                            alt="about 5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
