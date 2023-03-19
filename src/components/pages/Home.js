import React from "react";
//import { Link, Route, Routes } from "react-router-dom/dist/dom";
//import Hero from "../Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Home() {
  return (
      <div >
        
          <Row style={{width: "100%", backgroundColor: "pink", minHeight: "100%", marginLeft: "0vw", marginRight: "0vw"}}> 
            <Col style={{textAlign: "center", marginTop: "30vh", color: "black"}} >
              <h1 style={{fontSize: "6vh", fontWeight: "bolder",fontFamily: "Open Sans, sans-serif", letterSpacing: "0.1em"}}>CLAIRE GREENWOOD</h1>
              <h2 style={{fontSize: "3vh", fontFamily: "Open Sans, sans-serif", marginTop: "5vh"}}>Web Developer & Designer </h2>
            </Col>
          </Row>
          <Row>
            <Col>
            
            </Col>
          </Row>
      </div>
  )
}

export default Home;
