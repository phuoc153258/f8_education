import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ENV } from '../../../../config';

function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={ENV.staticFileUrl + 'f8-icon.png'} alt="F8 - Học lập trình để đi làm" />
                </Link>
                <div className={styles.title}>
                    <span>Học lập trình</span>
                    <span>Để đi làm</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
