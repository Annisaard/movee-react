import React, { Component } from "react";

export class ButtonPrimary extends Component {
  render() {
    return (
      <div className="flex justify-center pt-16 pb-5 ">
        <button
          className="btn-load rounded bg-secondary-800  text-abu-50 py-2 px-5 ml-4 font-light w-40 tracking-normal "
          onClick={this.props.onClick}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}

// export default Button;
