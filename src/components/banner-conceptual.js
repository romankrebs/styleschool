import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Концептуальное искусство и концептуальная мода</span>}
      bkgImage="url(/img/conceptualfashion/fullscreen.jpg)"
      bkgHead="rgba(227,211,166,0.95)"
      bkgPos="left 0 top 70%"
      bkgPosHover="left 0 top 72%"
      content={text}
      slide={slide}
      link="/conceptualfashion"
    />
  );
}
