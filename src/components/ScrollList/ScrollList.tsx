import React from 'react';
import styles from './ScrollList.module.scss';

const ScrollList = (): JSX.Element => {
    return (
        <div className={styles.vertical}>
            <div>
                <p className={styles.subHeading}>
                    <strong>293.243+</strong> người đã học
                </p>
                <div className={styles.headingWrap}>
                    <h2 className={styles.heading}>
                        <a rel="noreferrer" target="_self" href="/learning-paths">
                            Khóa học miễn phí
                            <span className={styles.viewAllIcon}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-right"
                                    className="svg-inline--fa fa-arrow-right "
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
                                    ></path>
                                </svg>
                            </span>
                        </a>
                    </h2>
                    <a className={styles.viewAll} rel="noreferrer" target="_self" href="/learning-paths">
                        Xem lộ trình
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-right"
                            className="svg-inline--fa fa-chevron-right "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="currentColor"
                                d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className={styles.body}></div>
        </div>
    );
};

export default ScrollList;
