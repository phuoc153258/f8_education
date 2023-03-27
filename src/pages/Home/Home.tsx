import React from 'react';
// import styles from './Home.module.scss';
import Navbar from '../../components/Layout/Navbar/Navbar';
import App from '../../components/Layout/App/App';
import Footer from '../../components/Layout/Footer/Footer';

const Home = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <App />
            <Footer />
        </>
    );
};

export default Home;
