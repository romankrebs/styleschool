import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={
        <span style={{}}>
          Руководство по продвижению модного бренда на глобальном рынке.
        </span>
      }
      bkgImage="url(/img/fashion-brand-promotion-gid/fullscreen.jpg)"
      bkgHead="rgba(200,200,240,0.8)"
      content={text}
      slide={slide}
      link="/fashion-brand-promotion-gid"
    />
  );
}
