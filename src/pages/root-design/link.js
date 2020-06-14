import React from "react";

class Link extends React.Component {
  state = {
    hover: false
  };

  setHover = () => {
    return this.setState({ hover: !this.state.hover });
  };

  render() {
    return (
      <a href={this.props.link} target="_blank">
        <span
          style={{
            fontFamily: "Roboto",
            fontWeight: 600,
            color: this.state.hover ? "rgb(191,159,37)" : "rgb(140,140,140)"
          }}
          onMouseOver={this.setHover}
          onMouseOut={this.setHover}
        >
          {this.props.text}
        </span>
      </a>
    );
  }
}

export default Link;
