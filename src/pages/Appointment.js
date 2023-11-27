import React, { useState } from 'react';
import handleAppointment from "../handles/handlesubmit"
function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    doctor: '',
    date: '',
    time: '10:00', // Default starting time
  });

  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAlertMessage(`Appointment booked successfully for ${formData.name} on ${formData.date} at ${formData.time}`);
    handleAppointment(formData);
  };

  const generateTimeOptions = () => {
    const startTime = 10 * 60; 
    const endTime = 14 * 60; 
    const timeOptions = [];

    for (let time = startTime; time <= endTime; time += 30) {
      const hours = Math.floor(time / 60);
      const minutes = (time % 60).toString().padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;
      timeOptions.push(formattedTime);
    }

    return timeOptions;
  };

  const timeOptions = generateTimeOptions();


  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
        <br />
        <label htmlFor="email"></label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <br />
        <label htmlFor="mobile"></label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter your phone"
          required
        />
        <br />
        <label htmlFor="doctor"></label>
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
        <label htmlFor="date"></label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="time"></label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          {timeOptions.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
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
