// src/pages/LandingPage.js
import React from 'react';
import TechnicianCarousel from '../components/Carousel';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <TechnicianCarousel />
    </div>
  );
};

export default LandingPage;
