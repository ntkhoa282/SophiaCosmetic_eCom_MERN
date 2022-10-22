import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useRef, useState, useEffect } from 'react';
import useDebounce from '~/ultis/debounceHook';
import httpRequest from '~/ultis/httpRequest';
import styles from './Search.module.scss';
import SearchItem from './SearchItem';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounceValue = useDebounce(searchValue, 1000);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            try {
                setLoading(true);
                const result = await httpRequest.get(`/product/search?q=${debounceValue}`);
                setSearchResult(result.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, [debounceValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const renderResult = (attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <div>
                {searchResult.map((result) => (
                    <SearchItem key={result._id} data={result} />
                ))}
            </div>
        </div>
    );

    console.log(searchValue);

    console.log(searchResult);

    return (
        <div className={cx('col-lg-5', 'col-md-8')}>
            <HeadlessTippy
                interactive
                onClickOutside={handleHideResult}
                visible={showResult && searchResult.length > 0}
                render={renderResult}
                placement="bottom"
            >
                <div className={cx('search')}>
                    <input
                        className={cx('search-input', 'form-control')}
                        placeholder="Tìm sản phầm mong muốn..."
                        spellCheck="false"
                        ref={inputRef}
                        onChange={handleChange}
                        value={searchValue}
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-img')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
