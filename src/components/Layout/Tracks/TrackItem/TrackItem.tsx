import React from 'react';
import styles from './TrackItem.module.scss';
import clsx from 'clsx';
import StepItem from '../StepItem/StepItem';

const TrackItem = ({
    track,
    index,
    userProgress,
    slug,
    currentStep,
    setIsFetchData,
    tracks,
    indexTrack,
}: any): JSX.Element => {
    return (
        <>
            <div className={clsx(styles.wrapper)}>
                <h3 className={styles.title}>
                    {index + 1}. {track.title}
                </h3>
                <span className={styles.icon}>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-up"
                        className="svg-inline--fa fa-chevron-up"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"
                        ></path>
                    </svg>
                </span>
            </div>
            <div className={clsx(styles.trackStepsList, styles.opened)}>
                <>
                    {track.steps.map((step: any, index: any) => {
                        return (
                            <StepItem
                                setIsFetchData={setIsFetchData}
                                currentStep={currentStep}
                                key={index}
                                slug={slug}
                                userProgress={userProgress}
                                step={step}
                                tracks={tracks}
                                indexTrack={indexTrack}
                            />
                        );
                    })}
                </>
            </div>
        </>
    );
};

export default TrackItem;
