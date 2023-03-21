import React from 'react';
import styles from './App.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';

const App = (): JSX.Element => {
    return (
        <div className={styles.withSidebar}>
            <div className={styles.sidebarWrap}>
                <Sidebar />
            </div>
            <div className={styles.withSidebarContent}>
                <section className="index-module_grid index-module_fullWidth" style={{ maxWidth: `1425px` }}>
                    <Home />
                </section>
            </div>
        </div>
    );
};

export default App;
