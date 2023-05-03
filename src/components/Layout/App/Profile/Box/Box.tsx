import React from 'react';
import styles from './Box.module.scss';

const Box = ({ content, title }: any): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>{title}</h4>
            <div>{content}</div>
        </div>
    );
};

export default Box;
