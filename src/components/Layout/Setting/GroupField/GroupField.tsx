import React from 'react';
import styles from './GroupField.module.scss';
// import FieldWrapper from '../FieldWrapper/FieldWrapper';

const GroupField = ({ content, heading }: any): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>{heading}</h2>
            {content}
        </div>
    );
};

export default GroupField;
