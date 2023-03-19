import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "pink", paddingLeft: "2vw"}} >
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
          About Me
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
          Contact Me
        </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
