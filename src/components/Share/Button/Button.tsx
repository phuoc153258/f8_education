import React from 'react';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = (): JSX.Element => {
    return (
        <Link to="/" className={styles.loginBtn}>
            Đăng nhập
        </Link>
    );
};

export default Button;
