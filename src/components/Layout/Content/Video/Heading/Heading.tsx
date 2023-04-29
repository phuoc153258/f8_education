import React from 'react';
import styles from './Heading.module.scss';
import { convertToDate } from '../../../../../helpers';

const Heading = ({ step }: any): JSX.Element => {
    return (
        <>
            <h1 className={styles.heading}>{step.title}</h1>
            <p className={styles.updated}>Cập nhật vào {convertToDate(step.updatedAt)}</p>
        </>
    );
};

export default Heading;
