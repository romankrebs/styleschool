import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Типология архитектурных форм в интерьере</span>}
      bkgImage="url(/img/banners/banner-typology-of-architectural-forms.jpg)"
      bkgHead="rgba(160,160,255,0.6)"
      content={text}
      slide={slide}
      link="/typology-of-architectural-forms"
    />
  );
}
