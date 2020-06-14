import React from "react";
import Banner from "./banner";
//import Icon from "@material-ui/core/Icon";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={
        <span>
          Дизайн интерьера
          <br />
          Интенсив
        </span>
      }
      bkgImage="url(/img/base-image-style/design-interior.jpg)"
      bkgHead="rgba(218,247,250,1.0)"
      content={text}
      slide={slide}
      //link="https://styleschool.ru/interior-design"
      link="/interior-design"
    />
  );
}
