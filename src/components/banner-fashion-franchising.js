import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={<span>Fashion франчайзинг – основы успешного бизнеса</span>}
      bkgImage="url(/img/fashion-franchising/ill01.jpg)"
      bkgHead="rgba(233,200,200,.8)"
      content={text}
      slide={slide}
      link="/fashion-franchising"
    />
  );
}
