import React from 'react';
import styles from './Heading.module.scss';

const Heading = (): JSX.Element => {
    return (
        <>
            <h1 className={styles.heading}>useEffect with timer functions</h1>
            <p className={styles.updated}>Cập nhật tháng 5 năm 2022</p>
        </>
    );
};

export default Heading;
