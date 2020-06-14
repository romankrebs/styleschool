import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Как создать франшизу и продвигать её</span>}
      bkgImage="url(/img/motivation-of-staff/ill01.jpg)"
      bkgHead="rgba(233,208,118,0.8)"
      content={text}
      slide={slide}
      link="/how-to-create-a-franchise"
    />
  );
}
