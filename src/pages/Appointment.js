import React, { useState } from 'react';

function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    doctor: '',
    date: '',
    time: '',
  });

  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAlertMessage(`Appointment booked successfully for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <br />
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
        />
        <br />
        <label htmlFor="doctor">Doctor:</label>
        <select
          id="doctor"
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select a doctor</option>
          <option value="Dr. Smith">Dr. Smith</option>
          <option value="Dr. Johnson">Dr. Johnson</option>
        </select>
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <br />
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
