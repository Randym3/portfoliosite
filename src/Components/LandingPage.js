import React, { Component } from "react";
import PageLogo from "./PageLogo";
import TypeWriter from "./TypeWriter";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";

class LandingPage extends Component {
  render() {
    return (
      <div className="banner-gradient text-center">
        <PageLogo />
        <TypeWriter />
        <Button className="button-banner" size="lg" variant="outline-dark">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            View Projects
          </Link>
        </Button>
      </div>
    );
  }
}
export default LandingPage;
