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
          Декорирование интерьеров
          <br />
          Интенсив
        </span>
      }
      bkgImage="url(/img/interiordecor/il01.jpg)"
      bkgHead="rgba(210,236,173,0.9)"
      content={text}
      slide={slide}
      link="/interiordecor"
    />
  );
}
