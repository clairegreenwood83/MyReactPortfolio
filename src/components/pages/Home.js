import React from "react";
//import { Link, Route, Routes } from "react-router-dom/dist/dom";
//import Hero from "../Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Home() {
  return (
      <div style={{backgroundColor: "pink", minHeight: "100%"}}>
        <Container style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center"}}>
          <Row style={{width: "100%"}}> 
            <Col style={{paddingTop: "25vh", textAlign: "center"}} >
              <h1 style={{fontSize: "10vh", fontFamily: "Lobster, cursive"}}>"Hi, I'm Claire</h1>
              <h1 style={{fontFamily: "Lobster, cursive"}}>designer & web developer"</h1>
            </Col>
            <Col>
              <img alt="headShot" src={require("../../images/Me-min.png")} style={{marginTop: "10vh", overflow: "none", objectFit: "cover", aspectRatio: "1/1", width: "80%", height: "auto"}}/>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Home;
