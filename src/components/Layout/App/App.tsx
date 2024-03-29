import React from 'react';
import styles from './App.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';
import CourseDetail from './CourseDetail/CourseDetail';
import Profile from './Profile/Profile';
import DefaultLayout from './DefaultLayout/DefaultLayout';

type Props = {
    page: string;
};

const App = ({ page }: Props): JSX.Element => {
    return (
        <div className={styles.withSidebar}>
            <div className={styles.sidebarWrap}>
                <Sidebar page={page} />
            </div>
            <div className={styles.withSidebarContent}>
                <section
                    className={`index-module_grid ${
                        page === 'profile' ? 'index-module_wide' : 'index-module_fullWidth'
                    }`}
                    style={{ maxWidth: page === 'profile' ? '1100px' : '1920px' }}
                >
                    {page === 'home' ? <Home /> : ''}
                    {page === 'courseDetail' ? <CourseDetail /> : ''}
                    {page === 'profile' ? <Profile /> : ''}
                    {page === 'learning-paths' ? <DefaultLayout page={page} /> : ''}
                    {page === 'courses' ? <DefaultLayout page={page} /> : ''}
                </section>
            </div>
        </div>
    );
};

export default App;
