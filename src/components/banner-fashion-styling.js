import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={
        <span>
          Fashion-стилистика
          <br />
          Профподготовка
        </span>
      }
      bkgImage="url(/img/banners/banner-fashion-styling.jpg)"
      bkgHead="rgba(233,200,200,.8)"
      content={text}
      slide={slide}
      link="/fashion-styling"
    />
  );
}
