import React from 'react';
import Navbar from '../../components/Layout/Navbar/Navbar';
import App from '../../components/Layout/App/App';
import Footer from '../../components/Layout/Footer/Footer';

const Course = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <App page="courses" />
            <Footer />
        </>
    );
};

export default Course;
