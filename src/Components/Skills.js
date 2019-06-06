import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <Container className="text-center mb-5 pb-5 ">
          <h1 className="p-4">Skills</h1>
          <p className="px-4">
            If it adds value to your company, I'll learn it.
          </p>
          <hr />

          <Row
            className=" justify-content-center align-items-center pb-5"
            style={{
              marginLeft: "0",
              marginRight: "0"
            }}
          >
            <Col>
              <i className="fab fa-html5" />
              <p> Html5 </p>
            </Col>

            <Col>
              <i className="fab fa-css3-alt" />
              <p> Css3 </p>
            </Col>

            <Col>
              <i className="fab fa-js-square" />
              <p> Javascript </p>
            </Col>

            <Col>
              <i className="fas fa-mobile" />
              <p> Responsive Design </p>
            </Col>

            <Col>
              <i className="fab fa-react" />
              <p> ReactJS & Redux</p>
            </Col>

            <Col>
              <i className="fab fa-bootstrap" />
              <p> Bootstrap 4 </p>
            </Col>
            <Col>
              <i className="fab fa-node-js" />
              <p> Node </p>
            </Col>

            <Col>
              <i className="fas fa-server" />
              <p> Express </p>
            </Col>

            <Col>
              <i className="fas fa-database" />
              <p> PostgreSQL </p>
            </Col>

            <Col>
              <i className="fab fa-git-square" />
              <p> Git </p>
            </Col>

            <Col>
              <i className="fab fa-github" />
              <p> GitHub </p>
            </Col>

            <Col>
              <i className="fab fa-npm" />
              <p> Node Package Manager</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Skills;
