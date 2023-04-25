import React from 'react';
import styles from './StepItem.module.scss';
import clsx from 'clsx';

const StepItem = ({ index, step }: any): JSX.Element => {
    return (
        <div className={clsx(styles.wrapper, 'learn-item-1', styles.locked)}>
            <div className={styles.info}>
                <h3 className={styles.title}>
                    {index}. {step.title}
                </h3>
                <p className={styles.desc}>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-play"
                        className={clsx('svg-inline--fa', 'fa-circle-play', styles.lessonIcon)}
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
                        ></path>
                    </svg>
                    <span>{step.duration}</span>
                </p>
            </div>
            <div className={styles.iconBox}>
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-check"
                    className={clsx('svg-inline--fa', 'fa-circle-check', styles.stateIcon, styles.lock)}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default StepItem;
