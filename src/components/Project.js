import React from 'react';
import Card from 'react-bootstrap/Card';

function Project(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                  <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">{props.github}</Card.Link>
                <Card.Link href="#">{props.deployed}</Card.Link>
            </Card.Body>
        </Card>
    );
  }
  
  export default Project