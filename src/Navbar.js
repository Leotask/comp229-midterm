// import React from "react";
// import { Link, useMatch, useResolvedPath } from "react-router-dom"

// function CustomLink({ to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
//     return (
//       <li className={isActive ? "active" : ""}>
//         <Link to={to} {...props}>
//           {children}
//         </Link>
//       </li>
//     )
//   }

// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">
//         Site Name
//       </Link>
//       <ul>
//         <Link to="/about">About</Link>
//         <Link to="/appointment">Appointment</Link>
//         <Link to="/doctorlist">Doctorlist</Link>
//         <Link to="/">Home</Link>
//       </ul>
//     </nav>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/doctorlist">Doctorlist</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
