import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={
        <span style={{ fontSize: "0.9em" }}>
          {/* Стажировка. Milan fashion week */}
          Шоппинг стажировка в Италии на Milan fashion week 17.02-23.02.2020
        </span>
      }
      bkgImage="url(/img/internship-in-milan/fullscreen.jpg)"
      bkgHead="rgba(200,100,0,.8)"
      content={text}
      slide={slide}
      link="/internship-in-milan"
    />
  );
}
