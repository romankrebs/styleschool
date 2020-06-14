import React from "react";
import Banner from "./banner";
//import Icon from "@material-ui/core/Icon";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Практики имидж-консультирования</span>}
      bkgImage="url(/img/banners/banner-practice-image-consulting.jpg)"
      bkgHead="rgba(0,0,0,.5)"
      colorText="rgb(255,255,255)"
      content={text}
      slide={slide}
      link="/practice-image-consulting"
    />
  );
}
