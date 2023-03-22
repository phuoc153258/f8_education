import React from 'react';
import styles from './CommonItem.module.scss';
import homeStyles from '../../Home.module.scss';
import buttonStyles from '../../../../../Share/Button/Button.module.scss';
import clsx from 'clsx';
import CourseItem from './CourseItem/CourseItem';
import PostItem from './PostItem/PostItem';
import VideoItem from './VideoItem/VideoItem';

type Props = {
    data: any;
};

const CommonItem = ({ data }: Props): JSX.Element => {
    return (
        <div className={clsx(styles.wrapper, homeStyles.courseItem)}>
            <a
                className={clsx(styles.thumb, styles.hasLink)}
                title={data.name}
                target="_self"
                href={data.href}
                style={{
                    backgroundImage: `url(${data.backgroundImage})`,
                }}
            >
                <button className={clsx(buttonStyles.btn, styles.ctaBtn)}>{data.btnContent}</button>
            </a>
            <h3 className={styles.title}>
                <a target="_self" href={data.href}>
                    {data.name}
                </a>
            </h3>
            <>{data.course ? <CourseItem /> : ''}</>
            <>{data.post ? <PostItem /> : ''}</>
            <>{data.video ? <VideoItem /> : ''}</>
        </div>
    );
};

export default CommonItem;
