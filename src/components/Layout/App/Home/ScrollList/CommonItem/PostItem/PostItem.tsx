import React from 'react';
import styles from './PostItem.module.scss';
import FallbackAvatar from '../../../../../../Share/FallbackAvatar/FallbackAvatar';
import { ENV } from '../../../../../../../config';

const PostItem = (): JSX.Element => {
    return (
        <div className={styles.author}>
            <a className={styles.avatarWrapper} href="/@son-dang">
                <FallbackAvatar image={ENV.apiUrl + '/api/v1/file/user-avatar.png'} name="Sơn Đặng" />
            </a>
            <a href="/@son-dang">
                <span className={styles.username}>Sơn Đặng</span>
                <span className={styles.dot}>·</span>
                <span>6 phút đọc</span>
            </a>
        </div>
    );
};

export default PostItem;
