import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import pic from "../Images/aboutme.jpg";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me aboutMe">
        <Row
          className=" justify-content-around"
          style={{
            marginLeft: "0",
            marginRight: "0"
          }}
        >
          <Col className=" pb-5" xl={6} lg={10} xs={12}>
            <h2>About Me</h2>
            <hr />
            <h3>My name is Randy Meneses, and I'm a Web Developer</h3> <br />
            <p>Firstly, I'd like to thank you for considering me.</p>
            <p>
              After I graduated from CSUF in January 2019, I wasn't sure what
              path to take career-wise. I had heard about web development in the
              past, but I always thought the skills required were beyond my
              capabilties. I challenged myself anyway, and began learning HTML,
              CSS, and JavaScript. I was immediately hooked and knew since then
              that my career path had to involve programming.{" "}
            </p>
            <p>
              From the planning stage to deployment, programming is something I
              truly enjoy, and am passionate about. When I'm not actively
              coding, I spend my free-time learning about new techniques to
              enhance my programming skills.
            </p>
          </Col>

          <Col xl={6} lg={10} xs={10} className=" text-center">
            <img className="aboutme-img " src={pic} alt="idea to production" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default AboutMe;
