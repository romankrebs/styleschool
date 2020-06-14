import React from "react";

export default function Dotted(props) {
  return (
    <div
      style={{
        height: props.children ? "auto" : 50,
        borderTop: "4px dotted rgb(200,200,200)",
        borderBottom: "4px dotted rgb(200,200,200)",
        ...props.style
      }}
    >
      {props.children ? props.children : null}
    </div>
  );
}
