import React from 'react';
import styles from './Button.module.scss';

const Button = (): JSX.Element => {
    return (
        <a href="/" className={styles.loginBtn}>
            Đăng nhập
        </a>
    );
};

export default Button;
