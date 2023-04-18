import React from 'react';
import styles from './CommonItem.module.scss';
import homeStyles from '../../Home.module.scss';
import buttonStyles from '../../../../../Share/Button/Button.module.scss';
import clsx from 'clsx';
import CourseItem from './CourseItem/CourseItem';
import PostItem from './PostItem/PostItem';
import VideoItem from './VideoItem/VideoItem';
import videoItemStyles from './VideoItem/VideoItem.module.scss';
import { Link } from 'react-router-dom';

type Props = {
    data: any;
};

const CommonItem = ({ data }: Props): JSX.Element => {
    return (
        <div className={clsx(styles.wrapper, homeStyles.courseItem)}>
            <Link
                className={clsx(styles.thumb, styles.hasLink)}
                title={data.name}
                target="_self"
                to={data.href}
                style={{
                    backgroundImage: `url(${data.backgroundImage})`,
                }}
            >
                <button className={clsx(buttonStyles.btn, styles.ctaBtn)}>{data.btnContent}</button>
                <div className={videoItemStyles.videoInfo}>
                    {data.video ? (
                        <>
                            <div className={videoItemStyles.playWrap}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="play"
                                    className={clsx('svg-inline--fa', 'fa-play', videoItemStyles.playIcon)}
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
                                    ></path>
                                </svg>
                            </div>
                            <div className={videoItemStyles.duration}>
                                <span>{data.video.videoLength}</span>
                            </div>
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </Link>
            <h3 className={styles.title}>
                <Link target="_self" to={data.href}>
                    {data.title}
                </Link>
            </h3>
            <>{data.studentCount ? <CourseItem studentCount={data.studentCount} /> : ''}</>
            <>{data.post ? <PostItem /> : ''}</>
            <>{data.video ? <VideoItem /> : ''}</>
        </div>
    );
};

export default CommonItem;
