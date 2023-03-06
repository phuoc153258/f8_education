import React from 'react';
import styles from './Home.module.scss';
import SlideShow from '../SlideShow/SlideShow';
import ScrollList from '../ScrollList/ScrollList';

const Home = (): JSX.Element => {
    return (
        <>
            <div className={styles.slideshow}>
                <SlideShow />
            </div>
            <div className={styles.wrapper}>
                <ScrollList />
            </div>
        </>
    );
};

export default Home;
