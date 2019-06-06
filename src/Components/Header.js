import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

class Header extends Component {
  state = {
    navbarclass: "topnav",
    navbarvariant: "light"
  };

  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({ navbarclass: "scrollingnav" });
      this.setState({ navbarvariant: "dark" });
    } else {
      this.setState({ navbarclass: "topnav" });
      this.setState({ navbarvariant: "light" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Navbar
        variant={this.state.navbarvariant}
        className={`text-center ${this.state.navbarclass} `}
        expand="lg"
        fixed="top"
      >
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <Link
              style={{ cursor: "pointer" }}
              className="nav-link"
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              duration={500}
            >
              About Me
            </Link>{" "}
            <Link
              style={{ cursor: "pointer" }}
              className="nav-link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>{" "}
            <Link
              style={{ cursor: "pointer" }}
              className="nav-link"
              activeClass="active"
              to="contactMe"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact Me
            </Link>
          </Nav>{" "}
        </Navbar.Collapse>
        <Navbar.Brand style={{ padding: "0px 0px", margin: "0 auto" }} href="/">
          <h3>
            {" "}
            <i class="fas fa-laptop-code" /> Randym3
          </h3>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
