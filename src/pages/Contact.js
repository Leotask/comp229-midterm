import React, { useState } from "react";
import handleContact from "../handles/contactsubmit"

export default function Contact () {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, email, mobile, message } = formData;

 
    setAlertMessage( <div style={{ fontFamily: 'YourChosenFont', fontSize: '16px' }}>
    Thank you for your message! {formData.name}! <br />
    Mobile: {formData.mobile} <br />
    Email: {formData.email}<br />
    Message:{formData.message}
  </div>);

   

    setFormData(initialFormData);
    console.log(formData)
    handleContact(formData);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };
  return (
   <div>
              <div className='info'>

                <p className="mb-2">Address</p>
                <h5 className="mb-0">941 Progress Avenue, Toronto, Canada</h5>
              </div>
     
        
          
              <div className='info'>

                <p className="mb-2">Call Us Now</p>
                <h5 className="mb-0"> 416-289-5000</h5>
              </div>
           
        
          
              <div className='info'>
       
                <p className="mb-2">Mail Us Now</p>
                <h5 className="mb-0">advising@centennialcollege.ca</h5>
              </div>
     
  

          <div className="container">
        <div className="text">
          Contact us Form
        </div>
        <form className="contact" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                id="firstName"
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                id="lastName"
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                id="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                id="mobile"
                required
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            
          
              <div className="underline"></div>
              <label htmlFor="mobile">Mobile Number</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea
                rows="8"
                cols="80"
                id="message"
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              
               
              <br />
              <div className="underline"></div>
              <label htmlFor="message">Write your message</label>
            </div>
          </div>

          <div className="input-data">
            <div className="inner"></div>
            <button className="submit-btn" type="submit" value="submit">
              Submit
            </button>
            <br></br>
            <button className="submit-btn" type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>

        </form>
      </div>
      <div className="contact-list">
        {alertMessage && (
          <div className="alert">
            <p>{alertMessage}</p>
          </div>
        )}
        </div>
    </div>


    



  );

        }