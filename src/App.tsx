import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Learning from './pages/Learning/Learning';
import Profile from './pages/Profile/Profile';
import Setting from './pages/Setting/Setting';

function App() {
    return (
        <>
            <Routes>
                <Route path="/learning/:slug" element={<Learning />} />
                <Route path="/courses/:slug" element={<CourseDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/settings/:slug" element={<Setting />} />
                <Route path="/:slug" element={<Profile />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
