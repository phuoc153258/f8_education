import React, { useState } from 'react';
import styles from './FormControl.module.scss';

const FormControl = ({ label, placeholder, name, maxLength, type, message, data, setData }: any): JSX.Element => {
    // const [show, setShow] = useState<any>(false);

    const handleInput = (e: any) => {
        setData(e.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper}>
                <div className={styles.labelGroup}>{label}</div>
                <div className={styles.inputWrap}>
                    <input
                        placeholder={placeholder}
                        name={name}
                        maxLength={maxLength}
                        type={type}
                        value={data}
                        onInput={handleInput}
                    />
                </div>
                {message}
            </div>
        </div>
    );
};

export default FormControl;
