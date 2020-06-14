import React from "react";
import Banner, { BannerBadge } from "./banner";

export default function Component() {
  const content = (
    <span style={{ fontSize: "1.3em", fontWeight: 700 }}>ОЧНО | ONLINE</span>
  );
  const slide = (
    <React.Fragment>
      <BannerBadge>
        <img
          src="/img/clock-outline.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        8&nbsp;академ.&nbsp;ч.
      </BannerBadge>
      <BannerBadge>
        <img
          src="/img/bell.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        4 встречи
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={
        <span>
          Антикризисное управление розничным магазином в индустрии моды
        </span>
      }
      bkgImage="url(/img/banners/banner-crisis-management-fashion-butik.jpg)"
      bkgHead="rgba(218,247,250,0.8)"
      content={content}
      slide={slide}
      //link="https://styleschool.ru/makeup"
      link="/crisis_management_fashion_butik"
    />
  );
}
