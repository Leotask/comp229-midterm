import React, { useState } from "react";

export default function About() {
  const initialFormData = {
    name: "",
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
    const { name,email,mobile, message } = formData;


    let alertMessage = `Thank You ${name}! \n${email} \n${mobile} \n${message}
    We will contact you shortly!`;
    setAlertMessage(`Thank you for your message! ${formData.name}! \nMobile: ${formData.mobile} \nEmail ${formData.email}`);

    alert(alertMessage);
    
    setFormData(initialFormData);
    console.log(formData)
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <div>
    <form className="newshop" onSubmit={handleSubmit}>
    <p>Contact Us</p>
  
    <label className="contact_text" htmlFor="name">
    </label>
    <input
      type="text"
      id="name"
      className="contact_input"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Name"
    />
    <br/>
  
    <label className="contact_text" htmlFor="email">
    </label>
    <input
      type="text"
      id="email"
      className="contact_input"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
    />
    <br />
  
    <label className="contact_text" htmlFor="mobile">
    </label>
    <input
      type="text"
      id="mobile"
      className="contact_input"
      name="mobile"
      value={formData.mobile}
      onChange={handleChange}
      placeholder="Mobile"
    />
    <br />
  
    <label className="contact_text" htmlFor="message">
    </label>
    <textarea
      id="message"
      className="contact_textarea"
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Type your message here"
    />
    <br />

      <button className="submitbutton" type="submit">
        Submit
      </button>
      <button className="cancelbutton" type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
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
