import React from "react";

function Duration(props) {
  return props.value ? (
    <p
      style={{
        fontFamily: "Roboto",
        fontSize: "1.1em",
        fontWeight: 500,
        textAlign: "left",
        color: "rgb(80,80,80)"
      }}
    >
      Длительность курса: {props.value}
    </p>
  ) : null;
}

export default Duration;
