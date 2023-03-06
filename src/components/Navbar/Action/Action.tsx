import React from 'react';
import styles from './Action.module.scss';
import Button from '../../Button/Button';

const Body = (): JSX.Element => {
    return (
        <div className={styles.action}>
            <Button />
        </div>
    );
};

export default Body;
