import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';

import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item}></MenuItem>;
        });
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <div className={cx('menu-body')}>{renderItems()}</div>
        </div>
    );

    return (
        <Tippy
            interactive
            delay={[0, 150]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom"
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
};

export default Menu;
