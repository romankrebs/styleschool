import React from "react";
// import { Grid } from "@material-ui/core";

export default function Colorblock(props) {
  return (
    <div
      style={{
        background: props.color
      }}
    >
      <img src={props.image} alt="" style={{ width: "100%", margin: 0 }} />
      <p
        style={{
          padding: 10,
          margin: 0,
          fontFamily: "Roboto",
          fontSize: "1em",
          color: "rgb(100,100,100)",
          textAlign: "justify"
        }}
      >
        {props.text}
      </p>
    </div>
  );
}
