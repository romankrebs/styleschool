import React from "react";
import Banner from "./banner";
//import Icon from "@material-ui/core/Icon";

export default function Component(props) {
  const text = false; /* (
    <span
      style={{
        color: "rgb(255,255,255)",
        fontFamily: "Roboto",
        fontSize: "1.2em",
        textAlign: "center"
      }}
    >
      <b>Дистанционно</b>
      <br />с 31 января 2018
    </span>
  ); */
  const slide = "";

  return (
    <Banner
      head={<span>Индустрия моды</span>}
      bkgImage="url(/img/banners/banner_moda_industrial.jpg)"
      bkgHead="rgba(233,233,233,0.8)"
      content={text}
      slide={slide}
      //link="https://styleschool.ru/basics-fashion-industry"
      link="/basics-fashion-industry"
    />
  );
}
