import React from 'react';
import styles from './FormControl.module.scss';

const FormControl = ({
    label,
    placeholder,
    name,
    maxLength,
    type,
    data,
    setData,
    isShowMessage,
    message,
}: any): JSX.Element => {
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
                {isShowMessage ? message : ''}
            </div>
        </div>
    );
};

export default FormControl;
