import React from "react";
import Banner, { BannerBadge } from "./banner";

export default function Component() {
  const slide = (
    <React.Fragment>
      <BannerBadge>
        <img
          src="/img/calendar.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        7 мес.
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={
        <span>
          Менеджмент в индустрии моды
          <br />
          Профподготовка
        </span>
      }
      bkgImage="url(/img/banners/banner-management.jpg)"
      bkgHead="rgba(209,232,232,0.95)"
      content=""
      slide={slide}
      link="/management-is-in-fashion"
    />
  );
}
