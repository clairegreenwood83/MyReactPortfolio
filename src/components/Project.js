import React from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Project(props) {

    const { id, image, title, description, github, deployed } = props;
   

    return (
        <Container>
            <Row>
                <Col>
                    <Card key={id} style={{ minWidth: '18rem', margin: '20px' }}>
                    <Card.Img variant="top" alt="project image" src={process.env.PUBLIC_URL + image}  style={{width: "100%", height: "100%"}} />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Link href={github}>GitHub</Card.Link>
                    <Card.Link href={deployed}>Deployed</Card.Link>
                   </Card.Body>
                   </Card>
                </Col>
            </Row>
        </Container>
    );
  }
  
  export default Project