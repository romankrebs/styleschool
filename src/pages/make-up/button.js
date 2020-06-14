import React from "react";
import { Zoom } from "react-reveal";

export default class Button extends React.Component {
  state = {
    hover: false,
  };

  toggle = () => {
    this.setState({hover: !this.state.hover});
  };

  render() {
    return(
      <Zoom>
        <div style={{
          maxWidth: 900,
          background: this.state.hover ? "rgba(123,170,218,0.8)" : "rgba(123,170,218,1)",
          color: "rgb(255,255,255)",
          textAlign: "center",
          font: "500 2em 'Roboto'",
          margin: "0 auto",
          padding: 24,
          cursor: "pointer",
          borderRadius: 2,
        }}
          onMouseOver={this.toggle}
          onMouseOut={this.toggle}
        >
          <img src="/img/help-circle.svg" alt="" style={{ height: 32, marginBottom: -6 }} />
          &ensp;Задайте вопрос
        </div>
      </Zoom>
    );
  }
}