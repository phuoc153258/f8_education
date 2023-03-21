import React from 'react';
import styles from './Search.module.scss';
import clsx from 'clsx';
import { ENV } from '../../../../config/env';

const Search = (): JSX.Element => {
    return (
        <div className={clsx(styles.wrapper, 'd-flex-center')}>
            <div
                style={{ backgroundImage: `url(${ENV.apiUrl}/api/v1/file/search-icon.svg)` }}
                className={styles.searchIcon}
            ></div>
            <input
                type="text"
                className={styles.input}
                spellCheck="false"
                placeholder="Tìm kiếm khóa học, bài viết, video, ..."
            />
        </div>
    );
};

export default Search;
