import React from 'react';
import Container from 'react-bootstrap/esm/Container';
//import { Link, Route, Routes } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
//import { Form, Button } from 'react-bootstrap';

const Contact = () => {
     return (
      <div>
        <Container>
          <Row style={{marginTop: "20vh", textAlign: "center"}} >
            <Col>
              <a id="mail" href='#' style={{fontFamily: "Open Sans, sans-serif", color: "black"}}>let's chat</a>
            </Col>
            <Col>
              <a id="linkedIn" href='https://www.linkedin.com/in/claire-greenwood-678a71267/' style={{fontFamily: "Open Sans, sans-serif", color: "black"}} >LinkedIn</a>
            </Col>
            <Col>
              <a id="gitHub" href="https://github.com/clairegreenwood83" style={{fontFamily: "Open Sans, sans-serif", color: "black"}}>GitHub</a>
            </Col>
            <Col>
              <a id="cv" href="#" style={{fontFamily: "Open Sans, sans-serif", color: "black"}}>CV</a>      
            </Col>
          </Row>
        </Container>
      </div>
 
     )}
export default Contact;






// function Contact(props) {
//   return (
//     <Container>
//       <Row>
//         <Col style={{marginTop: "5vh", marginBottom: "3vh", fontFamily: "Open Sans, sans-serif", textAlign: "center"}}>
//       <h1>Contact Me</h1>
//         </Col>
//       </Row>
//     </Container>

                      
//   );
// }

// export default Contact;
