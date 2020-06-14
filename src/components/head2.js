import React from "react";

export default function Head2 (props){
  var style = {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "1.3em",
    color: "rgb(100,100,100)",
    fontWeight: 700,
    ...props.style
  };
  return <h3 style={style}>{props.content}</h3>
}