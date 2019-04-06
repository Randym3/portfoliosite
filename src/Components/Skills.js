import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class Skills extends Component {
  render() {
    return (
        <Container className="text-center  skills-container">

            <h1>Front-End</h1>
            <hr />

            <Row className="py-5 justify-content-center">

                <Col sm={12} md={3}>
                <i class="fab fa-html5"></i> Html5
                </Col>

                <Col sm={12} md={3}>
                <i class="fab fa-css3-alt"></i>  Css3
                </Col>

                <Col sm={12} md={3}>
                <i class="fab fa-js-square"></i> Javascript 
                </Col>
                
                <Col sm={12} md={4}>
                <i class="fab fa-js-square"></i> React 
                </Col>

                <Col sm={12} md={4}>
                <i class="fab fa-js-square"></i> Bootstrap 4 
                </Col>

            </Row>


            <h1>Back-End</h1>
            <hr /> 
            
            <Row className="py-5 justify-content-center">
            
                <Col sm={12} md={3}>
                <i class="fab fa-node"></i> Node
                </Col>

                <Col sm={12} md={3}>
                <i class="fas fa-server"></i>  Express
                </Col>

                <Col sm={12} md={3}>
                <i class="fas fa-database"></i> PostgreSQL
                </Col>

            </Row>
        </Container>
    );
  }
}
export default Skills;