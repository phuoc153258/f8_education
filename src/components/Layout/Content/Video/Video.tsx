import React from 'react';
import styles from './Video.module.scss';
import clsx from 'clsx';
import Heading from './Heading/Heading';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import MarkdownParser from '../MarkdownParser/MarkdownParser';
import Powered from '../Powered/Powered';

const Video = ({ steps }: any): JSX.Element => {
    return (
        <>
            <div className={clsx(styles.wrapper, 'noselect')}>
                <VideoPlayer videoUrl={steps.step.videoUrl} />
            </div>
            <div className={styles.content}>
                <div className={styles.contentTop}>
                    <header className="wrapper">
                        <Heading step={steps.step} />
                    </header>
                    <button className={styles.addNote} data-tour="notes-tutorial">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="plus"
                            className="svg-inline--fa fa-plus "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
                            ></path>
                        </svg>
                        <span className={styles.label}>
                            Thêm ghi chú tại <span className={styles.num}>00:00</span>
                        </span>
                    </button>
                </div>
                <MarkdownParser step={steps.step} />
            </div>
            <Powered />
        </>
    );
};

export default Video;
