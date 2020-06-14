import React from "react";
import Banner, { BannerBadge } from "./banner";

export default function Component(props) {
  const makeup = false; /* (
    <React.Fragment>
      <span style={{ fontSize: "1.3em", fontWeight: 700 }}>Очно</span>
      <br />с 20 октября 2018
    </React.Fragment>
  ); */
  const slide = (
    <React.Fragment>
      <BannerBadge>
        <img
          src="/img/clock-outline.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        32&nbsp;академ.&nbsp;ч.
      </BannerBadge>
      <BannerBadge>
        <img
          src="/img/bell.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        8 занятий
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={<span>Психология стиля</span>}
      bkgImage="url(/img/banners/banner-psyhology.jpg)"
      bkgHead="rgba(231,202,103,0.8)"
      content={makeup}
      slide={slide}
      //link="https://styleschool.ru/style-psychology"
      link="/style-psychology"
    />
  );
}
