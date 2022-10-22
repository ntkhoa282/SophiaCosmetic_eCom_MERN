import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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

    const inputRef = useRef();

    const debounceValue = useDebounce(searchValue, 2000);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            try {
                const result = await httpRequest.get(`/product/search?q=${debounceValue}`);
                setSearchResult(result.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, [debounceValue]);

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

    return (
        <div className={cx('col-lg-5', 'col-md-8')}>
            <HeadlessTippy
                interactive
                onClickOutside={handleHideResult}
                visible={showResult && searchResult.length > 0}
                render={renderResult}
                placement="bottom-end"
            >
                <div className={cx('search')}>
                    <input
                        className={cx('search-input', 'form-control')}
                        placeholder="Tìm sản phầm mong muốn..."
                        spellCheck="false"
                        ref={inputRef}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    <button className={cx('search-img')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
