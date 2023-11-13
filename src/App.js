import React from 'react';
import logo from './logo.jpeg';
import './App.css';
import Navbar from "./Navbar";
import Appointment from "./pages/Appointment"
import Doctorlist from "./pages/Doctorlist"
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <button class="signbutton">Sign in</button>
          <img src={logo} className="App-logo" alt="logo" />


          <div className="container">


            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/doctorlist" element={<Doctorlist />} />
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
