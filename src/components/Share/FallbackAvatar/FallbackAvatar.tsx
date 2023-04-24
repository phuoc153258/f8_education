import React from 'react';
import styles from './FallbackAvatar.module.scss';
import clsx from 'clsx';

type Props = {
    image: string;
    name: string;
    fontSize: any;
};

const FallbackAvatar = ({ image, name, fontSize }: Props): JSX.Element => {
    return (
        <div className={clsx(styles.avatar, styles.pro)} style={{ fontSize: `${fontSize}px` }}>
            <img src={image} alt={name} />
        </div>
    );
};

export default FallbackAvatar;
