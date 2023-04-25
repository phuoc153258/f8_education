import React from 'react';
import styles from './Content.module.scss';
import Video from './Video/Video';

const Content = (): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Video />
        </div>
    );
};

export default Content;
