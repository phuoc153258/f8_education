import React from 'react';
import styles from './ActionBar.module.scss';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const ActionBar = ({ steps, slug, setShowTrack, showTrack, setIsFetchData }: any): JSX.Element => {
    const navigate = useNavigate();
    const handleStepLesson = (id: any) => {
        navigate(`/learning/${slug}?id=${id}`);
        setIsFetchData((preState: any) => !preState);
    };
    return (
        <div className={styles.wrapper}>
            <button
                onClick={() => {
                    handleStepLesson(steps.previous_id);
                }}
                className={clsx(
                    styles.btn,
                    steps.previous_id === '' || steps.step.position - 1 > steps.userCourse.lessonCompleted.length - 1
                        ? styles.disabled
                        : '',
                )}
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-left"
                    className="svg-inline--fa fa-chevron-left "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                >
                    <path
                        fill="currentColor"
                        d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
                    ></path>
                </svg>
                <span>BÀI TRƯỚC</span>
            </button>
            <button
                onClick={() => {
                    handleStepLesson(steps.next_id);
                }}
                className={clsx(
                    styles.btn,
                    styles.primary,
                    steps.next_id === '' || steps.step.position + 1 > steps.userCourse.lessonCompleted.length
                        ? styles.disabled
                        : '',
                )}
            >
                <span>BÀI TIẾP THEO</span>
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
            </button>
            <div className={styles.toggleWrap}>
                <h3 className={styles.trackTitle}>
                    {steps.userCourse.indexVideo + 1}. {steps.step.title}
                </h3>
                <button
                    className={styles.toggleBtn}
                    onClick={() => {
                        setShowTrack(!showTrack);
                    }}
                >
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
                </button>
            </div>
        </div>
    );
};

export default ActionBar;
