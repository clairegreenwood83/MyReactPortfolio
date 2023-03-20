import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Linkedin } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";


function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-collapse" style={{backgroundColor: "pink", paddingLeft: "2vw"}} >
      <div>
      <ul className="navbar-nav navbar-left ">
        <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
        </li>
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
      </div>
      <ul className="navbar-nav ms-auto" style={{marginRight: "5vw"}}>
          <li className="nav-item" style={{marginRight: "1vw"}}>
            <a id="mail" href='mailto:cg.clairegreenwood@gmail.com' style={{fontFamily: "Open Sans, sans-serif", color: "black", width: '5vh', height: "4vh"}}><Envelope/></a>
          </li>
          <li className="nav-item" style={{marginRight: "1vw"}}>
            <a id="linkedIn" href="https://www.linkedin.com/in/claire-greenwood-678a71267/" style={{fontFamily: "Open Sans, sans-serif", color: "black"}}><Linkedin/></a>
          </li>
           <li className="nav-item" style={{marginRight: "1vw"}}>
            <a id="gitHub" href="https://github.com/clairegreenwood83" style={{fontFamily: "Open Sans, sans-serif", color: "black"}}><Github/></a>
          </li>
      </ul>
    </nav>
  );
}

export default Header;
