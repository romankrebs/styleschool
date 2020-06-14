import React from "react";
import Banner, { BannerBadge } from "./banner";

export default function Component() {
  const text = "";
  const slide = (
    <React.Fragment>
      <BannerBadge>
        <img
          src="/img/clock-outline.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        15&nbsp;академ.&nbsp;ч.
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={<span>История моды с Русланом Миграновым</span>}
      bkgImage="url(/img/banners/banner-fashion-history.jpg)"
      bkgHead="rgba(227,217,173,0.9)"
      content={text}
      slide={slide}
      link="/fashion-history"
    />
  );
}
