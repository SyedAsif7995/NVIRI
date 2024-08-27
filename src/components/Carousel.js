// src/components/Carousel.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import TechnicianCard from './TechnicianCard';

const TechnicianCarousel = () => {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    axios.get('/api/featured-technicians').then(response => {
      setTechnicians(response.data);
    });
  }, []);

  return (
    <Carousel>
      {technicians.map(technician => (
        <Carousel.Item key={technician.id}>
          <TechnicianCard technician={technician} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TechnicianCarousel;
