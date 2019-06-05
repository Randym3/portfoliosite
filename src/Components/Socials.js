import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Socials extends Component {
  render() {
    return (
      <div className=" p-3 connect text-center contactMe">
        <h2>Connect With Me</h2>
        <p style={{ color: "#DCDCDC" }}>
          If you're interested in collaborating, feel free to contact me!
        </p>
        <hr style={{ borderColor: "#DCDCDC", width: "50%" }} />
        <Row
          className="justify-content-center"
          style={{
            marginLeft: "0",
            marginRight: "0"
          }}
        >
          <Col className="social" xl={4} lg={5} md={6} xs={10}>
            <h3>Socials</h3>
            <a href="https://www.linkedin.com/in/randy-meneses-00699b12a/">
              <i className="fab fa-linkedin-in" />
            </a>

            <a href="https://github.com/Randym3">
              <i className="fab fa-github" />
            </a>

            <a href="mailto:MenesesRandy@gmail.com">
              <i className="far fa-envelope"> </i>{" "}
            </a>
          </Col>

          <Col className="contact" xl={4} lg={5} md={6} xs={12}>
            <h3>Say hello:</h3>
            <i className="far fa-map-marker-alt" />
            <br />
            <span>Stanton CA, 90680</span>
            <br />
            <i className="fas fa-phone" />
            <br />
            <a href="tel:+17146234857">714-623-4857</a> <br />
            <i className="far fa-envelope" />
            <br />
            <a href="mailto:MenesesRandy@gmail.com">MenesesRandy@gmail.com</a>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Socials;
