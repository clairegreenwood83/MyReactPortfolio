import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About() {
  return (
    <div>
      <Container>
         <Row>
          <Col style={{marginTop: "5vh", marginBottom: "3vh", fontFamily: "Open Sans, sans-serif", textAlign:"center"}}>
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col>
             <p style={{lineHeight: "1.5rem", marginTop: "3vh"}}>
              <span>I am a compassionate, reliable Front-end Web Developer with a background as a medical doctor. I enjoy combining creativity and problem solving to develop user-friendly applications. My love of learning means I am always updating and expanding my skillset.</span>
            </p>
             <p>
              <span>I have completed an intensive 16-week front-end web development at Birmingham University and I have experience of applying fundamental knowledge of web development with HTML, CSS, JavaScript. I have an ability to create visually-compelling page layouts using UX design principles. I can manipulate page information and create interactivity using jQuery and React and retrieve data from servers using RESTful-compliant network requests. I am able to organise code, having mastered the foundations of object-oriented and functional programming paradigms. I can build modern web applications with industry-standard frameworks like Node.js and React and deploy them using Netlify.</span>
            </p>
            <p>
              <span>I have experience in working collaboratively, maintaining code versioning and working across distributed teams using Git and GitHub. I gained experience in agile development methodologies and implemented feature and bug fixes using Git branch workflow and pull requests. In my first group project I worked with a team to conceive and execute a design that solved a real-world problem by integrating data received from multiple server-side API requests.</span>
            </p>
            <p>
              <span>My background as a medical doctor means I have unique skills and perspectives to bring to web development. As well as being an accomplished creative problem solver, I have extensive experience of calmly and effectively working in high-pressured environments, independently and as part of a team. I am adaptable and resilient in new situations and my high level of emotional intelligence and effective communication skills, allow me to integrate easily into new teams and environments.</span>
            </p>
          </Col>
          <Col>
          <img alt="headShot" src={require("../../images/Me-min.png")} style={{marginTop: "3vh", marginBottom: "7vh", marginLeft: "8vw", overflow: "none", objectFit: "cover", aspectRatio: "1/1", width: "30vw", height: "auto", borderRadius: "50%"}}/>
          </Col>
        </Row>     
      </Container>
    </div>
  );
}

export default About;
