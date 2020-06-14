import React from "react";
import { Grid } from "@material-ui/core";
import Tile from "../../components/tile-date";
import H2 from "../../components/head1";
import Line from "../../components/line";

export default function Dates() {
  return (
    <Grid
      container
      justify="center"
      alignItems="stretch"
      style={{ padding: 20 }}
      spacing={4}
    >
      <Grid item xs={12} md={12}>
        <H2 content="Ближайший набор" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Tile
          title="Очно"
          link=""
          date="4 ноября 2019"
          content={[
            <span>
              Полная стоимость 28 <sup>000</sup> ₽
            </span>,
            "Доступна рассрочка на 10 месяцев",
            "Скидка при раннем бронировании"
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Tile
          title="Online"
          link=""
          date="5 ноября 2019"
          content={[
            <span>
              Полная стоимость 18 <sup>000</sup> ₽
            </span>,
            "Доступна рассрочка на 10 месяцев",
            "Скидка при раннем бронировании"
          ]}
        />
      </Grid>
      <Grid item xs={12} md={9} style={{ textAlign: "center" }}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={3} md={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="rgb(96,175,130)"
                d="M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"
              />
            </svg>
          </Grid>
          <Grid item xs={9} md={11}>
            <span
              style={{
                fontSize: "1em",
                fontWeight: 500,
                color: "rgb(100,100,100)"
              }}
            >
              &nbsp;&nbsp;Выпускники прошедшие весь курс получат Удостоверение о
              повышении квалификации
            </span>
          </Grid>
          <Grid item xs={12} md={11}>
            <div
              style={{
                textAlign: "center",
                padding: 10,
                margin: "0 auto"
              }}
            >
              <img
                src="/img/presscecretary/certificate.jpg"
                alt="Удостоверение о повышении квалификации"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Grid>
        </Grid>
        <Line />
      </Grid>
    </Grid>
  );
}
