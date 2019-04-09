import React, { Component } from 'react';
import {Image, Row} from 'react-bootstrap'
import Logo from '../Images/20190402_122358.jpg'

class PageLogo extends Component {
  render() {
    return (
      <Row className="justify-content-center">
       <Row className="page-logo justify-content-center">
                <Image className="page-logo2 align-self-center" src={Logo} height="220" width="220" roundedCircle />
          </Row>
      </Row>
    );
  }
}

export default PageLogo;
