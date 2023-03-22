import React from 'react';
import styles from './Home.module.scss';
import SlideShow from './SlideShow/SlideShow';
import ScrollList from './ScrollList/ScrollList';
import { scrollListData, commonItemPostData, commonItemCourseData, commonItemVideoData } from '../../../../data';

const Home = (): JSX.Element => {
    return (
        <>
            <div className={styles.slideshow}>
                <SlideShow />
            </div>
            <div className={styles.wrapper}>
                <ScrollList
                    key={'fe432d85-a478-41a4-b668-afe3218879c2'}
                    scrollListData={scrollListData[0]}
                    commonItemData={commonItemCourseData}
                />
                <ScrollList
                    key={'61a58294-4c66-43e1-adbd-563cec189541'}
                    scrollListData={scrollListData[1]}
                    commonItemData={commonItemPostData}
                />
                <ScrollList
                    key={'f692674f-6eb9-4467-906e-da4ac57f57b6'}
                    scrollListData={scrollListData[2]}
                    commonItemData={commonItemVideoData}
                />
            </div>
        </>
    );
};

export default Home;
