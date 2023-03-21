import React from 'react';
import styles from './Body.module.scss';
import Search from '../Search/Search';

const Body = (): JSX.Element => {
    return (
        <div className={styles.body}>
            <Search />
        </div>
    );
};

export default Body;
