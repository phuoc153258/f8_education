import React from 'react';
import styles from './UserMenu.module.scss';
import { Logout } from '../../../utils/';

const UserMenuList = ({ content }: any): JSX.Element => {
    return <ul className={styles.list}>{content}</ul>;
};

export default UserMenuList;
