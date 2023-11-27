
import React, {useState, useEffect}from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg';

function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [isLoggedIn, setIsLoggedIn] = useState(user!=null);
  const [isDoctor] = useState(user?.email === 'doctor1@gmail.com');
  const logout = () => {
    // Clear user information from local storage
    localStorage.removeItem('user');

    // Update the state to reflect that the user is now logged out
    setIsLoggedIn(false);
  };
  useEffect(() => {
    // Check if user is not null and set isLoggedIn to true
    if (user !== null) {
      setIsLoggedIn(true);
    }
  }, [user]);
  
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      </Link>
      <ul>
      <img src={logo} className="App-logo" alt="logo" />
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        {isLoggedIn && !isDoctor &&<li><Link to="/appointment">Appointment</Link></li>}
        {isDoctor && <li><Link to="/getdata">Appointment</Link></li>}
        <li><Link to="/doctorlist">Doctorlist</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <div className="signbutton">
        {isLoggedIn ? (
          <li><Link to="/" onClick={logout}>Logout</Link></li>
        ) : (
          <li><Link to="/login" onClick={() => setIsLoggedIn(true)}>Sign in</Link></li>
        )}
        
        
        </div>
      </ul>
      

    </nav>
  );
}

export default Navbar;
