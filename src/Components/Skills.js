import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <Container className="text-center mb-5 pb-5 ">
          <h1 className="py-4">Technological Skills</h1>
          <p>If it adds value to your company, I'll learn it.</p>
          <hr />

          <Row className=" justify-content-center align-items-center pb-5">
            <Col xs={4} sm={4} md={3}>
              <i className="fab fa-html5" /> <br /> Html5
            </Col>

            <Col xs={4} sm={4} md={3}>
              <i className="fab fa-css3-alt" /> <br /> Css3
            </Col>

            <Col xs={4} sm={4} md={3}>
              <i className="fab fa-js-square" /> <br /> Javascript
            </Col>

            <Col xs={4} sm={4} md={3}>
              <i className="fas fa-mobile" /> <br /> Responsive Design
            </Col>

            <Col xs={4} sm={4} md={3}>
              <i className="fab fa-react" /> <br />
              ReactJS & Redux
            </Col>

            <Col xs={4} sm={4} md={3}>
              <i className="fab fa-bootstrap" /> <br /> Bootstrap 4
            </Col>
            <Col xs={4} sm={4} md={3}>
              <i className="fab fa-node-js" /> <br /> Node
            </Col>

            <Col xs={4} sm={4} md={3}>
              <i className="fas fa-server" /> <br /> Express
            </Col>

            <Col xs={4} sm={4} md={3}>
              <i className="fas fa-database" /> <br /> PostgreSQL
            </Col>

            <Col xs={4} sm={4} md={3}>
              <i className="fab fa-git-square" /> <br /> Git
            </Col>

            <Col xs={4} sm={4} md={3}>
              <i className="fab fa-github" /> <br /> GitHub
            </Col>

            <Col xs={4} sm={4} md={3}>
              <i className="fab fa-npm" /> <br />
              Node Package Manager
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Skills;
