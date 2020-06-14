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
        16&nbsp;академ.&nbsp;ч.
      </BannerBadge>
      <BannerBadge>
        <img
          src="/img/bell.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        2 дня
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={<span>Fashion визуальный мерчендайзинг</span>}
      bkgImage="url(/img/banners/banner-visual.jpg)"
      bkgHead="rgba(226,197,211,0.9)"
      content={text}
      slide={slide}
      link="/fashion-visual-merchandising"
    />
  );
}
