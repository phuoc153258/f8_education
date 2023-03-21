import React from 'react';
// import styles from './Home.module.scss';
import Navbar from '../../components/Layout/Navbar/Navbar';
import App from '../../components/Layout/App/App';

const Home = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <App />
        </>
    );
};

export default Home;
