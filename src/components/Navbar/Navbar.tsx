import React from 'react';
import styles from './Navbar.module.scss';
import Logo from './Logo/Logo';
import Body from './Body/Body';
import Action from './Action/Action';

const Navbar = (): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Logo />
            <Body />
            <Action />
        </div>
    );
};

export default Navbar;
