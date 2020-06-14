import React from "react";

const H = props => {
  return (
    <h2
      style={{
        font: '700 2em "Roboto"',
        textAlign: "center",
        margin: 0,
        padding: "30px 0 50px 0"
      }}
    >
      {props.children}
    </h2>
  );
};

export default H;
