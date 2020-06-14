import React from "react";
import Banner from "./banner";

export default function Component(props) {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Социальные и художественные стратегии моды</span>}
      bkgImage="url(/img/conceptualfashion/600/fullscreen.jpg)"
      bkgHead="rgba(233,208,118,1.0)"
      content={text}
      slide={slide}
      link="/concepts_of_fashion"
    />
  );
}
