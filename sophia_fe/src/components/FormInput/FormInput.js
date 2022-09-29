import classNames from 'classnames/bind';
import styles from './FormInput.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function FormInput({ children, type }) {
    return (
        <div className={cx('col-3', 'input-effect')}>
            <input className={cx('effect-17')} type={type} placeholder=" " />
            <label>{children}</label>
            <span className={cx('focus-border')}></span>
        </div>
    );
}

FormInput.propTypes = {
    children: PropTypes.string,
    type: PropTypes.string,
};

export default FormInput;
