import React from "react";
import { Link } from "react-router-dom";

class Cot extends React.Component {
  state = {
    open: false
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <div
          style={{
            background: "rgb(255,250,245)",
            fontSize: "1em",
            fontWeight: 400,
            color: "rgb(100,100,100)",
            padding: 12
          }}
        >
          &bull; {this.props.summary}
          <span
            style={{
              color: "rgb(123,143,87)",
              cursor: "pointer"
            }}
            onClick={this.toggle}
          >
            Подробнее
          </span>
        </div>
        <div
          style={{
            background: "rgb(255,250,245)",
            maxHeight: this.state.open ? 300 : 0,
            transition: "max-height 0.5s",
            textAlign: "left",
            margin: 0,
            fontSize: "1em",
            fontWeight: 400,
            color: "rgb(100,100,100)",
            padding: 0,
            paddingLeft: 24,
            overflow: "hidden",
            boxSizing: "border-box"
          }}
        >
          {this.props.details}
          <div
            style={{
              background: "rgb(123,143,87)",
              borderRadius: 4,
              padding: 8,
              margin: 0,
              maxWidth: 120,
              marginLeft: this.state.open ? "calc(50% - 38px)" : 0,
              transition: "margin-left 0.5s",
              color: "rgb(255,255,255)",
              textAlign: "center"
            }}
          >
            <Link to={this.props.link}>
              <span style={{ color: "rgb(255,255,255)" }}>Купить</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function Assembly(props) {
  return (
    <div
      style={{
        padding: 8,
        background: "rgb(240,240,240)",
        fontWeight: 700,
        color: "rgb(80,80,80)"
      }}
    >
      <span
        style={{
          background: "rgb(230,230,230)",
          marginTop: -8,
          marginLeft: -8,
          padding: "16px 8px"
        }}
      >
        {props.number}
      </span>
      Лектор: <Link to={props.linkTeacher}>{props.teacher}</Link> Область:{" "}
      {props.area}
      <div
        style={{
          background: "rgb(255,250,245)",
          borderRadius: 6,
          padding: 12
        }}
      >
        {props.content.map((el, i) => (
          <Cot summary={el.summary} details={el.details} link={el.link} />
        ))}
      </div>
    </div>
  );
}

export default Assembly;
