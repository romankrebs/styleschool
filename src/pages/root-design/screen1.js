import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Link from "./link";

const font = "Roboto";

const Bull = props => {
  return (
    <span
      style={{
        color: props.color || "rgb(191,159,37)",
        fontSize: "1.4em",
        ...props.style
      }}
    >
      {" "}
      &bull;{" "}
    </span>
  );
};

const Screen = props => {
  return (
    <div style={{ paddingBottom: 24 }}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div
            style={{
              textAlign: "center",
              fontWeight: 500,
              fontFamily: font,
              color: "rgb(200,200,200)",
              fontSize: "1.2em",
              paddingTop: 24,
              paddingBottom: 24
            }}
          >
            Профессиональное образование в индустрии моды и дизайна
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            textAlign: "center",
            paddingTop: "6vh",
            paddingBottom: "2vh"
          }}
        >
          <img
            src="/img/root-design/logo-gold-gradient.png"
            style={{ height: "20vh" }}
            alt="#ВШСДТ"
          />
        </Grid>
        <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "Alice",
              fontSize: "1.8em",
              fontWeight: "normal",
              color: "rgb(191,159,37)",
              textAlign: "center"
            }}
          >
            ВЫСШАЯ ШКОЛА СТИЛИСТИКИ,
            <br />
            ДИЗАЙНА И ТЕХНОЛОГИЙ
          </h1>
        </Grid>

        <Grid item xs={12} md={12}>
          <div
            style={{
              fontSize: "1em",
              fontWeight: 500,
              textAlign: "center",
              color: "rgb(150,150,150)"
            }}
          >
            <Hidden mdUp>
              <span>
                <Link link="/styleschool" text="ШКОЛА СТИЛЯ" />
                <Bull />
                <Link link="/fashionschool" text="ШКОЛА МОДЫ" />
                <br />
                <Link link="/schoolofdesign" text="ШКОЛА ДИЗАЙНА" />
                <Bull />
                <Link link="/artschool" text="ШКОЛА ИСКУССТВ" />
                <br />
                <Link link="/schoolofmanagement" text="ШКОЛА УПРАВЛЕНИЯ" />
              </span>
            </Hidden>
            <Hidden smDown>
              <span>
                <Link link="/styleschool" text="ШКОЛА СТИЛЯ" />
                <Bull />
                <Link link="/fashionschool" text="ШКОЛА МОДЫ" />
                <Bull />
                <Link link="/schoolofdesign" text="ШКОЛА ДИЗАЙНА" />
                <br />
                <Link link="/artschool" text="ШКОЛА ИСКУССТВ" />
                <Bull />
                <Link link="/schoolofmanagement" text="ШКОЛА УПРАВЛЕНИЯ" />
              </span>
            </Hidden>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Screen;
