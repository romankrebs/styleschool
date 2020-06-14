import React from "react";

export default function Button(props) {
  return(
    <div style={{
      background: "rgb(134,158,94)",
      color: "rgb(255,255,255)",
      fontFamily: '"Hevletica", "Roboto"',
      fontSize: "1em",
      textAlign: "center",
      padding: 10,
      maxWidth: 280,
      margin: "0 auto",
    }}>
      <a href={props.link} style={{ color: "rgb(255,255,255)" }}>
        {props.children}
      </a>
    </div>
  );
}