import React from "react";
import Banner from "./banner";

export default function Component(props) {
  const text = "";
  const slide = "";

  return (
    <Banner
      head="«Сам себе стилист»"
      bkgImage="url(/img/banners/banner-self-stylist.jpg)"
      bkgHead="rgba(255,255,255,0.6)"
      content={text}
      slide={slide}
      link="/self_style"
    />
  );
}
