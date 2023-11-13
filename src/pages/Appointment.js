 // AppointmentBooking.js
import React, { useState } from 'react';

function AppointmentBooking() {
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your form handling logic goes here

    // For demonstration purposes, let's assume the form submission was successful
    setAlertMessage('Appointment booked successfully!');
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for appointment booking */}
        <button type="submit">Submit</button>
      </form>

      {alertMessage && (
        <div className="alert">
          <p>{alertMessage}</p>
        </div>
      )}
    </div>
  );
}

export default AppointmentBooking;
