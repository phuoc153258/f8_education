import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CourseDetail from './pages/CourseDetail/CourseDetail';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses/:slug" element={<CourseDetail />} />
            </Routes>
        </>
    );
}

export default App;
