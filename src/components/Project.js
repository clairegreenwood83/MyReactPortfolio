import React from 'react';

function Project(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
            {props.title}
            </li>
            <li>
            {props.github}
            </li>
            <li>
            {props.deployed}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Project