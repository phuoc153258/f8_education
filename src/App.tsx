import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import Login from './pages/Login/Login';

function App() {
    return (
        <>
            <Routes>
                <Route path="/courses/:slug" element={<CourseDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
