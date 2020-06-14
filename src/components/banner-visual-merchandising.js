import React from "react";
import Banner, { BannerBadge } from "./banner";
import { Grid } from "@material-ui/core";
import { datas } from "../pages/visual-merchandising-and-showcases-design/dates";

export default function Component(props) {
  const makeup = false; /* (
    <React.Fragment>
      <Grid container spacing={2} justify="center">
        {datas.online[0] ? (
          <Grid item xs={6} md={6}>
            <span style={{ fontSize: "1.3em", fontWeight: 700 }}>
              Дистанционно
            </span>
            <br />с {datas.online[0]}
          </Grid>
        ) : null}
        {datas.ofline[0] ? (
          <Grid item xs={6} md={6}>
            <span style={{ fontSize: "1.3em", fontWeight: 700 }}>Очно</span>
            <br />с {datas.ofline[0]}
          </Grid>
        ) : null}
      </Grid>
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
        254&nbsp;академ.&nbsp;ч.
      </BannerBadge>
      <BannerBadge>
        <img
          src="/img/calendar.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        6&nbsp;мес.
      </BannerBadge>
    </React.Fragment>
  );

  return (
    <Banner
      head={
        <span>
          Визуальный мерчендайзинг и витринистика
          <br />
          Профподготовка
        </span>
      }
      bkgImage="url(/img/banners/banner_vitrinism.jpg)"
      bkgHead="rgba(211,219,230,0.9)"
      content={makeup}
      slide={slide}
      //link="https://styleschool.ru/visual-merchandising-and-showcases-design"
      link="/visual-merchandising-and-showcases-design"
    />
  );
}
