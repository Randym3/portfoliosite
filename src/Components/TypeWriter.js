import React, { Component } from "react";

import { Row } from "react-bootstrap";

class TypeWriter extends Component {
  render() {
    const greeting = "RANDY MENESES";
    const fullStack = "Web Developer";

    return (
      <div>
        <Row
          className="justify-content-center text-center"
          style={{
            marginLeft: "0",
            marginRight: "0"
          }}
        >
          <p className="typewriter pt-2  ">{greeting}</p>
        </Row>
        <Row
          className="justify-content-center text-center "
          style={{
            marginLeft: "0",
            marginRight: "0"
          }}
        >
          <p className="typewriter other pb-2">
            {fullStack}
            <span className="blinker">|</span>
          </p>
        </Row>
      </div>
    );
  }
}

export default TypeWriter;
