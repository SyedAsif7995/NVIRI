// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TechnicianLogin from './pages/TechnicianLogin';
import UserLogin from './pages/UserLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/technician-login" element={<TechnicianLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
