import React from 'react';
import styles from './PostItem.module.scss';
import FallbackAvatar from '../../../../../../Share/FallbackAvatar/FallbackAvatar';
import { ENV } from '../../../../../../../config';
import { Link } from 'react-router-dom';

const PostItem = (): JSX.Element => {
    return (
        <div className={styles.author}>
            <Link className={styles.avatarWrapper} to="/@son-dang">
                <FallbackAvatar image={ENV.apiUrl + '/api/v1/file/user-avatar.png'} name="Sơn Đặng" fontSize={'2.9'} />
            </Link>
            <Link to="/@son-dang">
                <span className={styles.username}>Sơn Đặng</span>
                <span className={styles.dot}>·</span>
                <span>6 phút đọc</span>
            </Link>
        </div>
    );
};

export default PostItem;
