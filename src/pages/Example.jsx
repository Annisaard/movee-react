import { Input } from "postcss";
import React, { Component } from "react";

export class Example extends Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    return (
      <div>
        <Input></Input>
      </div>
    );
  }
}

export default Example;
