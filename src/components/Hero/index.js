import React from "react";
import "./style.css";
//import background from "../../images/heart-flowers.jpg";



function Hero(props) {
  return (
   // <div className="hero text-center" style={{ backgroundImage: `url(${background}) ` }}>
   <div className="hero text-center">
   {props.children}
    </div>
  );
}

export default Hero;