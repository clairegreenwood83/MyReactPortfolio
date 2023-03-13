import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <Link className="navbar-brand" to="/">
        Home
      </Link>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="ProjectGallery"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project Gallery
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
    </nav>
  );
}

export default Header;
