import React, { Fragment } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import CircularProgressBar from '../../Share/CircularProgressBar/CircularProgressBar';
import { ENV } from '../../../config';

const Header = ({ tracks, course }: any): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Link to={'/'}>
                <div className={styles.backBtn} title="Rời khỏi đây">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-left"
                        className={clsx('svg-inline--fa', 'fa-chevron-left', styles.icon)}
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        <path
                            fill="currentColor"
                            d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
                        ></path>
                    </svg>
                </div>
            </Link>

            <Link className={styles.logo} to={'/'}>
                <img src={ENV.staticFileUrl + 'f8-icon.png'} alt="F8" />
            </Link>
            <div className={styles.courseTitle}>{course.title}</div>
            <div className={styles.actions}>
                <div className={styles.progressBar}>
                    <CircularProgressBar
                        progress={tracks.passPercent}
                        content={
                            <Fragment>
                                <div className={styles.percent}>
                                    <span className={styles.num}>{Math.round(tracks.passPercent)}</span>%
                                </div>
                            </Fragment>
                        }
                    />

                    <p className={styles.completedMsg}>
                        <strong>
                            <span className={styles.num}>{tracks.userProgress.length}</span>/
                            <span className={styles.num}>{tracks.trackStepCount}</span>
                        </strong>{' '}
                        bài học
                    </p>
                </div>
                <button className={styles.actionBtn} data-tour="">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="file"
                        className={clsx('svg-inline--fa', 'fa-file', styles.icon)}
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path
                            fill="currentColor"
                            d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128z"
                        ></path>
                    </svg>
                    <span className={styles.label}>Ghi chú</span>
                </button>
                <button className={clsx(styles.actionBtn, styles.helpBtn)}>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-question"
                        className={clsx('svg-inline--fa', 'fa-circle-question', styles.icon)}
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"
                        ></path>
                    </svg>
                    <span className={styles.label}>Hướng dẫn</span>
                </button>
            </div>
        </div>
    );
};

export default Header;
