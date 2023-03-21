import React from 'react';
import styles from './Logo.module.scss';
import { ENV } from '../../../../config/env';

const Logo = (): JSX.Element => {
    return (
        <div className={styles.logo}>
            <a href="/">
                <img src={ENV.apiUrl + '/api/v1/file/f8-icon.png'} alt="" />
            </a>
            <h4 className={styles.logoHeading}>Học Lập Trình Để Đi Làm</h4>
        </div>
    );
};

export default Logo;
