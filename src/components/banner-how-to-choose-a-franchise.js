import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Как выбрать франшизу и успешно с ней работать</span>}
      bkgImage="url(/img/fashion-franchising/ill01.jpg)"
      bkgHead="rgba(200,200,233,.8)"
      content={text}
      slide={slide}
      link="/how-to-choose-a-franchise"
    />
  );
}
