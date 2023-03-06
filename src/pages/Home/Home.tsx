import React from 'react';
// import styles from './Home.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import App from '../../components/App/App';

const Home = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <App />
        </>
    );
};

export default Home;
