import React from 'react';
import SettingComponent from '../../components/Layout/Setting/Setting';
import Navbar from '../../components/Layout/Navbar/Navbar';
import Footer from '../../components/Layout/Footer/Footer';

const Setting = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <SettingComponent />
            <Footer />
        </>
    );
};

export default Setting;
