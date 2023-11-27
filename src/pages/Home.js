import React from 'react';
import { Link } from 'react-router-dom';
import feature from './feature.jpg'

export default function Home() {
  // Sample data (replace with your actual data)
  const tableData = [
    {
      day: 'Monday',
      openingTime: '9:00 AM -',
      closingTime: '6:00 PM',
    },
    {
      day: 'Tuesday',
      openingTime: '9:00 AM -',
      closingTime: '6:00 PM',
    },
    {
      day: 'Wednesday',
      openingTime: '9:00 AM -',
      closingTime: '6:00 PM',
    },
    {
      day: 'Thursday',
      openingTime: '9:00 AM -',
      closingTime: '6:00 PM',
    },
    {
      day: 'Friday',
      openingTime: '9:00 AM -',
      closingTime: '6:00 PM',
    },
    {
      day: 'Saturday',
      openingTime: '9:00 AM -',
      closingTime: '6:00 PM',
    },
    {
      day: 'Sunday',
      openingTime: 'Closed'
    }

  ];

  return (
    <div>
      <h2>Healthy Haven</h2>
      <p>Welcome to Healthy Haven , your trusted healthcare provider.</p>


      {/* Render the table with the remaining data */}
      <table className="home-table">
        <thead>
          <tr>
            <th>Phone :416-289-5000
              <br />
              Email: advising@centennialcollege.ca
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((dayData, index) => (
            <tr key={index}>
              <td className={index % 2 === 0 ? 'odd-column' : ''}>
                {dayData.day} &nbsp;&nbsp;
                {dayData.openingTime} &nbsp;
                {dayData.closingTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <div>
        <Link to="/login">
          <button class="homebutton">Book an Appointment</button>
        </Link>
      </div>
      <br></br>
      Walk-In Clinic Hours
      <br />
      Monday to Friday | 10 AM-2 PM
      <br />
      Available on a first-come, first-served basis until daily capacity is reached.

      <div>
        <div>
          <img className="position-absolute img-fluid w-100 h-100" src={feature} style={{ objectFit: 'cover' }} alt="" />
          <p >Features</p>
          <h1 >Why Choose Us</h1>


          <div class="experience-container">
            <div class="experience-category">
              <h2>Doctors</h2>
              <ul>
                <li>👩‍⚕️ Expert Doctors</li>
                <li>🌟 Top-notch Quality</li>
              </ul>
            </div>

            <div class="experience-category">
              <h2>Services</h2>
              <ul>
                <li>✔️ Positive Atmosphere</li>
                <li>🕒 24/7 Availability</li>
              </ul>
            </div>

            <div class="experience-category">
              <h2>Consultation</h2>
              <ul>
                <li>🤝 Personalized Consultation</li>
                <li>🔍 In-depth Medical Support</li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </div>




  );
}
