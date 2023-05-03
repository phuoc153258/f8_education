import React from 'react';
import styles from './UserMenu.module.scss';
const UserMenuList = ({ content }: any): JSX.Element => {
    return <ul className={styles.list}>{content}</ul>;
};

export default UserMenuList;
