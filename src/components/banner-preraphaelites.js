import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={
        <span>
          Прерафаэлиты: о том, чего не было, не будет и «можно только лишь
          желать»
        </span>
      }
      bkgImage="url(/img/preraphaelites/preraphaelites.jpg)"
      bkgHead="rgba(190,255,160,0.6)"
      content={text}
      slide={slide}
      link="/pre-raphaelites"
    />
  );
}
