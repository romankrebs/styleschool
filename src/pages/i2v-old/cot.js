import React from "react";

export default class Cot extends React.Component {
  state = {
    open: false
  };

  openClose = () => {
    return this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <div
          style={{
            padding: 12,
            margin: 0,
            color: "rgb(255,255,255)",
            fontSize: "1em",
            textAlign: "center",
            border: "1px solid rgb(235,235,235)",
            background:
              "linear-gradient(to bottom, rgb(143,153,107) 0%, rgb(123,143,87) 20%, rgb(123,143,87) 80%, rgb(118,138,82) 100%)",
            borderRadius: 4,
            cursor: "pointer"
          }}
          onClick={this.openClose}
        >
          {this.props.textButton}
        </div>
        <div
          style={{
            overflow: "hidden",
            transition: "max-height 0.5s",
            maxHeight: this.state.open ? 800 : 0,
            padding: 12,
            margin: 0,
            color: "rgb(100,100,100)",
            fontSize: "1em"
          }}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}
