import classNames from 'classnames/bind';
import styles from './FormInput.module.scss';
import React from 'react';

const cx = classNames.bind(styles);
export const FormInput = React.forwardRef(({ onChange, onBlur, name, type, children, errors, ...props }, ref) => (
    <div className={cx('col-3', 'input-effect')}>
        <input
            name={name}
            className={cx('effect-17')}
            type={type}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            placeholder=" "
            {...props}
        />
        <label>{children}</label>
        <span className={cx('focus-border')}></span>
    </div>
));
