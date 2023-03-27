import React from 'react';
import styles from './FallbackAvatar.module.scss';
import clsx from 'clsx';

type Props = {
    image: string;
    name: string;
};

const FallbackAvatar = ({ image, name }: Props): JSX.Element => {
    return (
        <div className={clsx(styles.avatar, styles.pro)} style={{ fontSize: '2.9px' }}>
            <img src={image} alt={name} />
        </div>
    );
};

export default FallbackAvatar;
