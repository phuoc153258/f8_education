import React, { useState } from 'react';
import Navbar from '../../components/Layout/Navbar/Navbar';
import App from '../../components/Layout/App/App';

const Profile = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [show, setShow] = useState<any>(true);

    if (!show) return <></>;

    return (
        <>
            <Navbar />
            <App page="profile" />
        </>
    );
};

export default Profile;
