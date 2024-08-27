// src/components/TechnicianCard.js
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TechnicianCard = ({ technician }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={technician.photo} />
      <Card.Body>
        <Card.Title>{technician.name}</Card.Title>
        <Card.Text>
          {technician.specialization}
          <br />
          Rating: {technician.rating}
          <br />
          {technician.description}
        </Card.Text>
        <Button variant="primary">Contact</Button>
      </Card.Body>
    </Card>
  );
};

export default TechnicianCard;
