import React from 'react';
import styles from './Navbar.module.scss';
import Logo from './Logo/Logo';
import Body from './Body/Body';
import Action from './Action/Action';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Navbar = (): JSX.Element => {
    const regex = /^\/@[a-z0-9-]+$/;
    const location = useLocation();
    const isProfilePage = regex.test(location.pathname);

    return (
        <div className={clsx(styles.wrapper, isProfilePage ? styles.transparent : '')}>
            <Logo />
            {!isProfilePage ? <Body /> : <></>}
            <Action />
        </div>
    );
};

export default Navbar;
