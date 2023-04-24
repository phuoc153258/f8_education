import React from 'react';
import styles from './UserMenu.module.scss';
import FallbackAvatar from '../FallbackAvatar/FallbackAvatar';
import { ENV } from '../../../config';

const UserMenuUser = ({ user }: any): JSX.Element => {
    return (
        <div className={styles.user}>
            <div className={styles.avatarWrapper}>
                <FallbackAvatar image={ENV.staticFileUrl + user.avatar} name={user.fullname} fontSize={'5.6'} />
            </div>
            <div className={styles.info}>
                <span className={styles.name}>{user.fullname}</span>
                <div className={styles.username}>@{user.slug}</div>
            </div>
        </div>
    );
};

export default UserMenuUser;
