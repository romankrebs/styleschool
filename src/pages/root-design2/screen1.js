import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Link from "./link";

const font = "Roboto";

const Bull = props => {
  return (
    <span
      style={{
        color: props.color || "rgb(172,133,70)",
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
    <div
      style={{
        paddingBottom: 24,
        background:
          "rgb(250,250,250)" /* "linear-gradient(130deg, rgb(40,40,40) 0%, rgb(220,220,220) 20%, rgb(220,220,220) 80%, rgb(40,40,40) 100%)" */
      }}
    >
      <Grid container>
        <Grid item xs={12} md={12}>
          <div
            style={{
              textAlign: "center",
              fontWeight: 600,
              fontFamily: font,
              color: "rgb(30,90,30)",
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
            src="/img/root-design/logo.png"
            style={{ height: "20vh" }}
            alt="#ВШСДТ"
          />
        </Grid>
        <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
          <div
            style={
              {
                //  background: "linear-gradient(130deg, rgb(101,66,34) 0%, rgb(141,105,54) 25%, rgb(172,133,70) 35%, rgb(229,183,101) 40%, rgb(252,218,120) 45%, rgb(254,232,123) 50%, rgb(252,218,120) 55%, rgb(229,183,101) 60%, rgb(172,133,70) 65%, rgb(141,105,54) 75%, rgb(101,66,34) 100%)",
              }
            }
          >
            <h1
              style={{
                fontFamily: "Roboto",
                fontSize: "1.8em",
                fontWeight: 700,
                color: "rgb(30,90,30)",
                // background: "rgb(250,250,250)",// "linear-gradient(130deg, rgb(101,66,34) 0%, rgb(141,105,54) 25%, rgb(172,133,70) 35%, rgb(229,183,101) 40%, rgb(252,218,120) 45%, rgb(254,232,123) 50%, rgb(252,218,120) 55%, rgb(229,183,101) 60%, rgb(172,133,70) 65%, rgb(141,105,54) 75%, rgb(101,66,34) 100%)",
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                // mixBlendMode: "hard-light", // "color-dodge",
                textAlign: "center"
              }}
            >
              ВЫСШАЯ ШКОЛА СТИЛИСТИКИ,
              <br />
              ДИЗАЙНА И ТЕХНОЛОГИЙ
            </h1>
          </div>
        </Grid>

        <Grid item xs={12} md={12}>
          <div
            style={{
              fontSize: "1em",
              fontWeight: 500,
              textAlign: "center"
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
