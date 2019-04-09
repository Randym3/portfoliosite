import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap'

class Socials extends Component {
  render() {
    return (
      <div className=" p-5 connect text-center" id="Contact-Me">
      <h2>Connect With Me</h2>
      <p >If you're interested in collaborating, feel free to contact me!</p>
        <Row className="justify-content-around  ">

          <Col className="socials py-5" xl={6} lg={10} xs={10}>
          <h3>Socials</h3>
          <a href="https://www.linkedin.com/in/randy-meneses-00699b12a/">
          <i className="fab fa-linkedin-in"></i>
          </a>
         

          <a href="https://github.com/Randym3">
          <i className="fab fa-github"></i></a>
          
          <a href="mailto:MenesesRandy@gmail.com">
          <i className="far fa-envelope"> </i> </a>
          </Col>

          <Col className="contact" xl={6} lg={10} xs={12}>
          <h3>Say hello:</h3>
          <i className="far fa-map-marker-alt"></i> <span style={{paddingRight: "3.5em"}}>Stanton CA, 90680</span>
           <br/>
         <i className="fas fa-phone"></i>  <a style={{paddingRight: "5.5em"}} href="tel:+17146234857">714-623-4857</a> <br />
          <i className="far fa-envelope"></i> <a href="mailto:MenesesRandy@gmail.com">MenesesRandy@gmail.com</a>
          </Col>
          
        </Row>
  


</div>

    )
  }
}
export default Socials;