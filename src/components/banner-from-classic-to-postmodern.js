import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Художественный образ: от классики к метамодерну</span>}
      bkgImage="url(/img/from-classic-to-postmodern/slide09.jpg)"
      bkgHead="rgba(233,208,118,1.0)"
      content={text}
      slide={slide}
      link="/from_classic_to_postmodern"
    />
  );
}
