import React from 'react';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = ({ href, content }: any): JSX.Element => {
    return (
        <Link to={href} className={styles.loginBtn}>
            {content}
        </Link>
    );
};

export default Button;
