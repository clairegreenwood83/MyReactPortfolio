import React from "react";
//import { Link, Route, Routes } from "react-router-dom/dist/dom";
//import Hero from "../Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Home() {
  return (
      <div >
        
          <Row style={{width: "100%", backgroundColor: "pink", minHeight: "100%"}}>
            <Col style={{textAlign: "center", marginBottom: "10vh", marginTop: "8vh"}} >
              <h1 style={{fontSize: "10vh", fontFamily: "Lobster, cursive"}}>"Hi, I'm Claire</h1>
              <h1 style={{fontFamily: "Lobster, cursive"}}>designer & web developer"</h1>
            </Col>
          </Row>
          <Row style={{width: "100%"}}>
            <Col style={{ textAlign: "center" }}>
              <img alt="headShot" src={require("../../images/Me-min.png")} style={{marginTop: "2vh", overflow: "none", objectFit: "cover", aspectRatio: "1/1", width: "30vw", height: "auto"}}/>
            </Col>
          </Row>
      </div>
  )
}

export default Home;
