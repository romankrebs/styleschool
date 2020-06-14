import React from "react";
import Banner from "./banner";

export default function Component(props) {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Философия японской моды</span>}
      bkgImage="url(/img/banners/banner-japanese-fashion-philosophy.jpg)"
      bkgHead="rgba(227,216,173,0.9)"
      content={text}
      slide={slide}
      link="/japanese-fashion-philosophy"
    />
  );
}
