import React from "react";
import Banner from "./banner";
//import Icon from "@material-ui/core/Icon";

export default function Component() {
  const text = "";
  const slide = "";

  return (
    <Banner
      head={
        <span style={{ fontSize: "0.8em" }}>
          Знакомство с брендами премиального сегмента с разбором по стилистике
        </span>
      }
      bkgImage="url(/img/banners/master-classes.jpg)"
      bkgHead="rgba(233,208,118,1.0)"
      content={text}
      slide={slide}
      link="/premium-brands"
    />
  );
}
