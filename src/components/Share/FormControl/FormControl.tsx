import React, { useState } from 'react';
import styles from './FormControl.module.scss';

const FormControl = ({ label, placeholder, name, maxLength, type, message }: any): JSX.Element => {
    const [show, setShow] = useState<any>(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper}>
                <div className={styles.labelGroup}>{label}</div>
                <div className={styles.inputWrap}>
                    <input placeholder={placeholder} name={name} maxLength={maxLength} type={type} value="" />
                </div>
                {message}
            </div>
        </div>
    );
};

export default FormControl;
