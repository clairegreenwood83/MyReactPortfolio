import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About() {
  return (
    <div>
      <Container>
         <Row>
          <Col style={{marginTop: "5vh", marginBottom: "3vh"}}>
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col>
             <p>I am a compassionate, reliable, and hard-working individual in the final weeks of a skills bootcamp in front-end web development at Birmingham University. Completion of the skills bootcamp means I have experience of applying fundamental knowledge of web development with HTML, CSS, JavaScript. I have experience of responsive web design and an ability to create visually-compelling page layouts using UX design principles. I can manipulate page information and create interactivity using jQuery and React and retrieve data from servers using RESTful-compliant network requests. I am able to organise code, having mastered the foundations of object-oriented and functional programming paradigms. I can build modern web applications with industry-standard frameworks like Node.js and React and deploy them using Netlify.</p>
          </Col>
        </Row>
        <Row>
          <Col>
             <p>Group projects formed a significant component of the bootcamp course, allowing me to gain valuable experience in working collaboratively, maintaining code versioning and working across distributed teams using Git and GitHub. I gained experience in agile development methodologies and implemented feature and bug fixes using Git branch workflow and pull requests. In my first group project I worked with a team to conceive and execute a design that solved a real-world problem by integrating data received from multiple server-side API requests.</p>
          </Col>
        </Row>
      <p>My background as a medical doctor means I have unique skills and perspective to bring to web development. As well as being an accomplished creative problem solver, I have extensive experience of calmly and effectively working in high-pressured environments, independently and as part of a team. I am adaptable and resilient in new situations and my high level of emotional intelligence and effective communication skills, allow me to integrate easily into new teams and environments. I am currently seeking new workplace opportunities in web development and design, that are rewarding, challenging and in environments that allow the healthy work life balance I desire.</p>
         
      </Container>
    </div>
  );
}

export default About;
