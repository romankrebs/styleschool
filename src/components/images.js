import React from "react";

export default function Img(props) {
  // let i480 = props.i480;
  let small = props.small;
  let img = props.img;

  return (
    <pictures>
      <source media="(max-width: 900px)" srcset={small} />
      <source srcset={img} />
      <img src={img} alt={props.alt} style={props.style} />
    </pictures>
  );
}
