import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Психология стиля</span>}
      bkgImage="url(/img/banners/banner-psychology-of-style.jpg)"
      bkgHead="rgba(190,255,160,0.6)"
      content={text}
      slide={slide}
      link="/psychology-of-style"
    />
  );
}
