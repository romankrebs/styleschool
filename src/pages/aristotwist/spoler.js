import React from "react";

export default class Spoller extends React.Component {
  state = {
    open: false,
  };

  openClose = () => {
    return this.setState({open: !this.state.open});
  };

  render() {
    
    return (
      <div>
        <p style={{
          padding: 5,
          margin: 0
        }}>
        &bull;&nbsp;
          <span style={{
            fontWeight: 400,
            fontSize: this.state.open ? "1.2em" : "1em", //"1em",
            transition: "font-size 0.5s, color 0.5s",
            color: this.state.open ? "rgb(50,50,50)" : "rgb(100,100,100)",
            fontFamily: "Roboto",
            padding: 5,
            margin: 0,
          }}>
            {this.props.short}
          </span>
          &nbsp;&nbsp;
          <span style={{
            color: "rgb(160,0,0)",
            cursor: "pointer",
            fontFamily: "Roboto",
            fontSize: "0.9em"
          }}
            onClick={this.openClose}
          >
            { this.state.open ? "Кратко" : "Подробнее" }
          </span>
        </p>
        <div style={{
          width: "100%",
          heigth: 0,
          transition: "max-height 0.5s",
          overflow: "hidden",
          fontFamily: "Roboto",
          fontSize: "0.8em",
          padding: "0 0 0 20px",
          maxHeight: this.state.open ? 200 : 0
        }}>
          {this.props.detail}
        </div>
      </div>
    );
  }
}