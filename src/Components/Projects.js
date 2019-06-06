import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import ProjectOne from "../Images/macbook.png";
import ProjectTwo from "../Images/portfolio.png";

class Projects extends Component {
  render() {
    return (
      <div className="project-row projects">
        <h1 className="text-center">Projects</h1>
        <p className="text-center p-4">
          I am constantly working on side projects; they are only displayed here
          once I am satisfied with them.
        </p>
        <hr />
        <Row
          className="  justify-content-center"
          style={{
            marginLeft: "0",
            marginRight: "0"
          }}
        >
          <Col className="m-5" xl={4} md={8} sm={10}>
            <Card className="p-2" style={{ minWidth: "350px" }}>
              <Card.Img variant="top" src={ProjectOne} />
              <Card.Body>
                <h2>Flixify</h2>
                <Card.Text>
                  Simple and responsive web application that allows users to
                  browse for movies and TV shows.
                </Card.Text>
                <a href="https://flixify.netlify.com" target="blank">
                  <Button className="m-2" variant="outline-warning">
                    <i className="fas fa-eye" /> Live Demo
                  </Button>
                </a>
                <a href="https://github.com/Randym3/flixify" target="blank">
                  <Button className="m-2" variant="outline-warning">
                    <i className="fas fa-code" /> {` `}
                    View Code
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-5" xl={4} md={8} sm={10}>
            <Card className="p-2" style={{ minWidth: "350px" }}>
              <Card.Img variant="top" src={ProjectTwo} />
              <Card.Body>
                <h2>RandyM3 - Portfolio</h2>
                <Card.Text>
                  Simple portfolio website, designed and coded by myself to
                  showcase my work.
                </Card.Text>
                <a href="https://Randym3.netlify.com" target="blank">
                  <Button className="m-2" variant="outline-warning">
                    <i className="fas fa-eye" /> Live Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/Randym3/portfoliosite"
                  target="blank"
                >
                  <Button className="m-2" variant="outline-warning">
                    <i className="fas fa-code" /> {` `}
                    View Code
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;
