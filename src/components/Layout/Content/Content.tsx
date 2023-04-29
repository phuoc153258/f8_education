import React from 'react';
import styles from './Content.module.scss';
import Video from './Video/Video';
import clsx from 'clsx';

const Content = ({ steps, w100 }: any): JSX.Element => {
    return (
        <div className={clsx(styles.wrapper, w100)}>
            <Video steps={steps} />
        </div>
    );
};

export default Content;
