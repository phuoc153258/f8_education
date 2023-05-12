import React from 'react';
import styles from './Logo.module.scss';
import { ENV } from '../../../../config/env';
import { Link, useLocation } from 'react-router-dom';

const Logo = (): JSX.Element => {
    const location = useLocation();

    return (
        <div className={styles.logo}>
            <Link to="/">
                <img src={ENV.apiUrl + '/api/v1/file/f8-icon.png'} alt="" />
            </Link>
            {location.pathname === '/' ? (
                <>
                    {' '}
                    <h4 className={`${styles.logoHeading} !text-red-900`}>Học Lập Trình Để Đi Làm</h4>
                </>
            ) : (
                <>
                    {' '}
                    <Link to="/" className={styles.backHome}>
                        <h4 className={styles.logoHeading}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="chevron-left"
                                className="svg-inline--fa fa-chevron-left "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
                                ></path>
                            </svg>
                            <span>Quay lại</span>
                        </h4>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Logo;
