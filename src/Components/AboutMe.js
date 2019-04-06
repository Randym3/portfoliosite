import React, { Component } from 'react';
import { Col, Jumbotron, Row } from 'react-bootstrap'
import pic from '../Images/aboutme.jpg'


class AboutMe extends Component {
  render() {
    return (
        <Jumbotron className="slantedJumbo"  >
            <Row className="justify-content-around">
                <Col xl={6} lg={10} xs={10}>
                    <h2>About Me</h2>
                    <hr />
                    <h3>My name is Randy Meneses, and I'm a Full Stack Web Developer</h3>
                    <p>
                        Firstly I'd like to thank you for checking out my page.
                    </p>
                    <p>After I graduated from CSUF with a degree in finance, I began studying HTML & CSS. I was hooked from the start; I knew I wanted to make programming into my career. Since then I have learned other frameworks and back-end technologies. </p>
                    <p>From the planning stage to deployment, programming is something I truly enjoy, and am passionate about. 
                        When I'm not actively coding, I spend my free-time learning about new techniques to enhance my programming skills. 
                    </p>
                </Col>

                <Col xl={6}  className=" text-center">
                    <img className="aboutme-img " src={pic} width="550" alt="idea to production" />
                </Col>
            </Row>

        </Jumbotron>
            
    );
  }
}

export default AboutMe;
