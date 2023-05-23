import * as React from 'react';
import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Layout/Navbar';
import SideBar from './Layout/SideBar';
import { useParams } from 'react-router-dom';
import Course from './Dashboard/Course';

function Admin() {
    const { page } = useParams();
    return (
        <>
            <ToastContainer />
            <Navbar />
            <div className="flex">
                <SideBar page={page} />
                {page === 'courses' ? <Course /> : ''}
            </div>
        </>
    );
}

export default Admin;
