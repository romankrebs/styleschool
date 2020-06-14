import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Стилистика для визажистов</span>}
      bkgImage="url(/img/banners/style4make.jpg)"
      bkgHead="rgba(67,195,190,0.2)"
      content={text}
      slide={slide}
      link="/style4make"
    />
  );
}
