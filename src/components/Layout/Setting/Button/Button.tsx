import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ classButton, content, handleButton }: any): JSX.Element => {
    return (
        <button
            className={clsx(
                styles.fieldButton,
                classButton === undefined ? styles.fieldButtonDefault : styles[classButton],
            )}
            onClick={handleButton}
        >
            {content}
        </button>
    );
};

export default Button;
