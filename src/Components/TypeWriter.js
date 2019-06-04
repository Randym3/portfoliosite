import React, { Component } from "react";

import { Row } from "react-bootstrap";

class TypeWriter extends Component {
  render() {
    const greeting = "Hello, I am Randy";
    const fullStack = "I am a Web Developer";

    return (
      <div>
        <Row className="justify-content-center text-center">
          <p className="typewriter  py-2">{greeting}</p>
        </Row>
        <Row className="justify-content-center text-center ">
          <p className="typewriter other py-2 mb-5 ">
            {fullStack}
            <span className="blinker">|</span>
          </p>
        </Row>
      </div>
    );
  }
}

export default TypeWriter;
