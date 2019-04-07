import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <Container className="text-center mb-5 pb-5 ">

            <h1 className="py-5">Technological Skills</h1>
            <p className="pb-5">If it adds value to your company, I'll learn it.</p>
            <hr />

            <Row className=" justify-content-center align-items-center pb-5">

                <Col  xs={8}sm={10} md={3}>
                  <i class="fab fa-html5"></i> Html5
                </Col>

                <Col  xs={8}sm={10} md={3}>
                  <i class="fab fa-css3-alt"></i>  Css3
                </Col>

                <Col  xs={8}sm={10} md={3}>
                  <i class="fab fa-js-square"></i> Javascript 
                </Col>

                <Col  xs={8}sm={10} md={3}>
                <i class="fas fa-mobile"></i> Responsive Design
                </Col>

                
                <Col  xs={8}sm={10} md={3}>
                <i class="fab fa-react"></i> ReactJS
                </Col>

                <Col  xs={8}sm={10} md={3}>
                <i class="fab fa-bootstrap"></i> Bootstrap 4 
                </Col>
                <Col  xs={8}sm={10} md={3}>
                <i class="fab fa-node-js"></i> Node
                </Col>

                <Col  xs={8}sm={10} md={3}>
                  <i class="fas fa-server"></i>  Express
                </Col>

                <Col  xs={8}sm={10} md={3}>
                  <i class="fas fa-database"></i> PostgreSQL
                </Col>

                <Col  xs={8}sm={10} md={3}>
                  <i class="fab fa-git-square"></i> Git 
                </Col>

                <Col  xs={8}sm={10} md={3}>
                  <i class="fab fa-github"></i> GitHub 
                </Col>

                <Col  xs={8}sm={10} md={3}>
                <i class="fab fa-npm"></i>
                </Col>
            </Row>
        </Container>
        </div>
    );
  }
}
export default Skills;