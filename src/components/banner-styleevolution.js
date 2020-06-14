import React from "react";
import Banner, { BannerBadge } from "./banner";
import { datas } from "../pages/styleevolution/date-education";

export default function Component(props) {
  const text = false; /* (
    <React.Fragment>
      <span style={{ fontSize: "1.3em", fontWeight: 700 }}>Очно</span>
      <br />с {datas.ofline[0]}
    </React.Fragment>
  ); */
  const slide = (
    <React.Fragment>
      <BannerBadge>
        <img
          src="/img/calendar.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        9 мес.
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={<span>Эволюция стилей XX века</span>}
      bkgImage="url(/img/banners/banner-styleevolution.jpg)"
      bkgHead="rgba(160,160,160,0.8)"
      content={text}
      slide={slide}
      link="/styleevolution"
    />
  );
}
