import React, { Component } from 'react';
import { Row, Col , Card, Button} from 'react-bootstrap';
import ProjectOne from '../Images/macbook.png'


class Projects extends Component {

  render() {
    return (
        <Row className=" justify-content-around  project-row ">
            <Col className="m-5"xl={3}>
                    <Card  className="p-2" style={{ minWidth: '350px' }}>
                        <Card.Img variant="top" src={ProjectOne} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button className="m-2" variant="primary">Live Demo</Button>
                            <Button className="m-2" variant="primary">View Code</Button>
                        </Card.Body>
                    </Card>
            </Col>

            <Col className="m-5"xl={3}>
                <Card  className="p-2"   style={{ minWidth: '350px' }}>
                    <Card.Img variant="top" src={ProjectOne} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button className="m-2" variant="primary">Live Demo</Button>
                                    <Button className="m-2" variant="primary">View Code</Button>
                        </Card.Body>
                </Card>
            </Col>

            <Col className="m-5"xl={3}>
                <Card  className="p-2"  style={{ minWidth: '350px' }}>
                    <Card.Img variant="top" src={ProjectOne} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="m-2" variant="primary">Live Demo</Button>
                                <Button className="m-2" variant="primary">View Code</Button>
                    </Card.Body>
                    </Card>
            </Col>
        </Row>
    );
  }

}

export default Projects;
