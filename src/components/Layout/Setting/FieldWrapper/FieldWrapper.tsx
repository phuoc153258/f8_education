import React from 'react';
import styles from './FieldWrapper.module.scss';
import InputField from '../InputField/InputField';

const FieldWrapper = ({ content }: any): JSX.Element => {
    return <div className={styles.wrapper}>{content}</div>;
};

export default FieldWrapper;
