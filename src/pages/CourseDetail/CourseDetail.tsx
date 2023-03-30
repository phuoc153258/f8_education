import React from 'react';
// import styles from './Course.module.scss';
import Navbar from '../../components/Layout/Navbar/Navbar';
import App from '../../components/Layout/App/App';
import Footer from '../../components/Layout/Footer/Footer';

const CourseDetail = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <App page="courseDetail" />
            <Footer />
        </>
    );
};

export default CourseDetail;
