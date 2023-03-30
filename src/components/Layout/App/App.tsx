import React from 'react';
import styles from './App.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';
import CourseDetail from './CourseDetail/CourseDetail';

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
                <section className="index-module_grid index-module_fullWidth" style={{ maxWidth: `1425px` }}>
                    {page === 'home' ? <Home /> : ''}
                    {page === 'courseDetail' ? <CourseDetail /> : ''}
                </section>
            </div>
        </div>
    );
};

export default App;
