// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CompanyIntro from './components/CompanyIntro';
import Register from './components/Register';
import Login from './components/Login';
import PostRequest from './components/PostRequest';
import SubmitApplication from './components/SubmitApplication';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from localStorage
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(!!loginStatus);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company-intro" element={<CompanyIntro />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/post-request" element={<PostRequest />} />
        <Route path="/submit-application" element={<SubmitApplication />} />
      </Routes>
    </Router>
  );
}

export default App;

