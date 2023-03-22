import React from 'react';
import styles from './PostItem.module.scss';

const PostItem = (): JSX.Element => {
    return (
        <div className={styles.author}>
            <a className="PostItem_avatar-wrapper__IdMDr" href="/@son-dang">
                <div className="FallbackAvatar_avatar__gmj3S FallbackAvatar_pro__-8mK+" style={{ fontSize: '2.9px' }}>
                    <img src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png" alt="Sơn Đặng" />
                    <img
                        className="FallbackAvatar_crown__BnONf"
                        src="/static/media/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                        alt="crown"
                    />
                </div>
            </a>
        </div>
    );
};

export default PostItem;
