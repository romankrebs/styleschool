import React from "react";
import Banner from "./banner";
//import Icon from "@material-ui/core/Icon";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Имиджмейкер-стилист: введение в профессию</span>}
      bkgImage="url(/img/banners/banner-career.jpg)"
      bkgHead="rgba(200,200,200,0.8)"
      content={text}
      slide={slide}
      //link="https://styleschool.ru/career-imagemaker-stylist"
      link="/career-imagemaker-stylist"
    />
  );
}
