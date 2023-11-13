import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>MERN Dragon Clinic</h1>
      <p>Welcome to MERN Dragon Clinic, your trusted healthcare provider.</p>
      <Link to="/appointment">
        <button>Book an Appointment</button>
      </Link>
    </div>
  );
}