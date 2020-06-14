import React from "react";

export default function Head3 (props){
  var style = {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "1em",
    color: "rgb(100,100,100)",
    fontWeight: 700,
    ...props.style
  };
  return <h4 style={style}>{props.content}</h4>
}