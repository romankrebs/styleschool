import React from "react";
import Banner from "./banner";
//import Icon from "@material-ui/core/Icon";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Fashion-журналистика в цифровую эпоху</span>}
      bkgImage="url(/img/banners/banner_fashion_digital.jpg)"
      bkgHead="rgba(233,233,233,0.8)"
      content={text}
      slide={slide}
      link="/fashion-media-digital"
      //link="https://styleschool.ru/fashion-media-digital"
    />
  );
}
