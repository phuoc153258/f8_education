import React from 'react';
import styles from './Home.module.scss';
import SlideShow from './SlideShow/SlideShow';
import ScrollList from './ScrollList/ScrollList';
import { scrollListData } from '../../../../data/scrollList';

const Home = (): JSX.Element => {
    return (
        <>
            <div className={styles.slideshow}>
                <SlideShow />
            </div>
            <div className={styles.wrapper}>
                <>
                    {scrollListData.map((x) => {
                        return <ScrollList data={x} />;
                    })}
                </>
            </div>
        </>
    );
};

export default Home;
