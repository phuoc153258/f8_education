import React, { useEffect } from 'react';
import styles from './Tracks.module.scss';
import TrackItem from './TrackItem/TrackItem';

const Tracks = ({ tracks, steps, slug, setIsFetchData }: any): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.heading}>Nội dung khóa học</h1>
                    <button className={styles.closeBtn}>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="xmark"
                            className="svg-inline--fa fa-xmark"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="currentColor"
                                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                            ></path>
                        </svg>
                    </button>
                </header>
                <div className={styles.body}>
                    <>
                        {tracks.tracks.map((track: any, index: any) => {
                            return (
                                <TrackItem
                                    key={index}
                                    track={track}
                                    index={index}
                                    slug={slug}
                                    currentStep={steps.step}
                                    userProgress={tracks.userProgress}
                                    setIsFetchData={setIsFetchData}
                                    tracks={tracks}
                                    indexTrack={index}
                                />
                            );
                        })}
                    </>
                </div>
            </div>
        </div>
    );
};

export default Tracks;
