import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Собираем капсулу в отпуск</span>}
      bkgImage="url(/img/banners/master-classes.jpg)"
      bkgHead="rgba(233,208,118,1.0)"
      content={text}
      slide={slide}
      link="/putting-the-capsule-on-vacation"
    />
  );
}
