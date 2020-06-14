import React from "react";
import Banner from "./banner";
//import Icon from "@material-ui/core/Icon";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Модный ассортимент</span>}
      bkgImage="url(/img/banners/banner-business-boutique.jpg)"
      bkgHead="rgba(227,216,173,0.9)"
      content={text}
      slide={slide}
      link='/business_boutique'
    />
  );
}
