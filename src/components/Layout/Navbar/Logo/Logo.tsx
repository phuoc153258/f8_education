import React from 'react';
import styles from './Logo.module.scss';
import { ENV } from '../../../../config/env';
import { Link } from 'react-router-dom';

const Logo = (): JSX.Element => {
    return (
        <div className={styles.logo}>
            <Link to="/">
                <img src={ENV.apiUrl + '/api/v1/file/f8-icon.png'} alt="" />
            </Link>
            <h4 className={styles.logoHeading}>Học Lập Trình Để Đi Làm</h4>
        </div>
    );
};

export default Logo;
