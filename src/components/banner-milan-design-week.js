import React from "react";
import Banner from "./banner";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={
        <span style={{ fontSize: "0.9em" }}>
          Практика на Milan Design Week 21-27&nbsp;апреля&nbsp;2020
        </span>
      }
      bkgImage="url(/img/internship-in-milan/slide01.jpg)"
      bkgHead="rgba(200,100,0,.8)"
      content={text}
      slide={slide}
      link="/milan-design-week"
    />
  );
}
