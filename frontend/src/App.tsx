import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Layout from './components/layout/layout';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/layout" element={<Layout/>} />
        </Routes>
    </Router>
);

export default App;
