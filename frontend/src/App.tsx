import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Layout from './components/layout';
import Navbar from './components/navbar';
import './App.scss';

const App = () => (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/layout" element={<Layout />} />
                </Routes>
            </Router>
        </div>
    </div>
);

export default App;
