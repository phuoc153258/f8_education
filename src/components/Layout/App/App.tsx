import React from 'react';
import styles from './App.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';
import CourseDetail from './CourseDetail/CourseDetail';
import Profile from './Profile/Profile';

type Props = {
    page: string;
};

const App = ({ page }: Props): JSX.Element => {
    return (
        <div className={styles.withSidebar}>
            <div className={styles.sidebarWrap}>
                <Sidebar />
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
                </section>
            </div>
        </div>
    );
};

export default App;
