import React, { Component } from 'react';
import PageLogo from './PageLogo'
import TypeWriter from './TypeWriter'
import {Button} from 'react-bootstrap';

class LandingPage extends Component {
  render() {
    return (
      <div className="banner-gradient text-center">
          <PageLogo />
          <TypeWriter />
          <Button className="button-banner" size="lg" variant="outline-dark">
              View Projects
          </Button>
       </div>
    );
  }
}
export default LandingPage;