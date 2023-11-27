import React from 'react';
import top from './top.jpg';
import './App.css';
import Navbar from "./Navbar";
import Appointment from "./pages/Appointment"
import Doctorlist from "./pages/Doctorlist"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact" 
import Signup from './pages/Signup';
import Login from './pages/Login';
import Getdata from './pages/getdata';
import PatientAppointment from './pages/patientappointment'
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom"

function App() {
  // const navigate = useNavigate();

  // const handleSignInClick = () => {
  //   // Navigate to the login page when the "Sign in" button is clicked
  //   navigate('/login');
  // };
  return (
    <Router>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <img src={top} className="top" alt="top" />
          {/* <Link to="/" className="site-title">
      </Link> */}
      {/* <Link to="/login" className="signbutton">Sign in</Link> */}

          <div className="container">


            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/doctorlist" element={<Doctorlist />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/getdata" element={<Getdata />} />
              <Route path="/patientappointment" element={<PatientAppointment/>} />
              <Route path="/" element={<Home />} />
            </Routes>

          </div>
          <footer className="copyright">
            <p>&copy;&nbsp;Copyright Hoiyeung Suen COMP229 - Fall 2023. All rights reserved.</p>
          </footer>
        </header>
      </div>
    </Router>
    

  );
}

export default App;
