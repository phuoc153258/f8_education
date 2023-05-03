import React from 'react';
import styles from './CircularProgressBar.module.scss';
import headerStyles from '../../Layout/Header/Header.module.scss';
import clsx from 'clsx';

const CircularProgressBar = ({ progress }: any): JSX.Element => {
    return (
        <div
            className={clsx(styles.pieWrapper, 'progress-45', 'style-2')}
            style={
                {
                    '--size': '35px',
                    '--progress': progress,
                    '--bar-width': '3px',
                    shadowBorderColor: '#4d4f50',
                } as React.CSSProperties
            }
        >
            <div className={clsx(styles.pie, progress > 50 ? styles.overHalf : '')}>
                <div className={clsx(styles.leftSide, styles.halfCircle)}></div>
                {progress > 50 ? <div className={clsx(styles.rightSide, styles.halfCircle)}></div> : ''}
            </div>
            <div className={styles.shadow}></div>
            <div className={styles.body}>
                <div className={headerStyles.percent}>
                    <span className={headerStyles.num}>{progress}</span>%
                </div>
            </div>
        </div>
    );
};

export default CircularProgressBar;
