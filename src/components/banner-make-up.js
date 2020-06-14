import React from "react";
import Banner, { BannerBadge } from "./banner";

export default function Component() {
  const makeup = "";
  // (
  //   <React.Fragment>
  //     <span style={{ fontSize: "1.3em", fontWeight: 700 }}>Online</span>
  //     <br />с 1 августа 2018
  //   </React.Fragment>
  // );
  const slide = (
    <React.Fragment>
      <BannerBadge>
        <img
          src="/img/clock-outline.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        72&nbsp;академ.&nbsp;ч.
      </BannerBadge>
      <BannerBadge>
        <img
          src="/img/bell.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        24 занятия
      </BannerBadge>
      <BannerBadge>
        <img
          src="/img/calendar.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        3&nbsp;мес.
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={<span>Базовый профессиональный курс по make-up</span>}
      bkgImage="url(/img/base-image-style/make-up.png)"
      bkgHead="rgba(218,247,250,0.8)"
      content={makeup}
      slide={slide}
      //link="https://styleschool.ru/makeup"
      link="/makeup"
    />
  );
}
