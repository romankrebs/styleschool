import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles, colors } from "./styles";

const Head = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container alignItems="stretch" style={{ background: colors.light }}>
        <Grid item xs={12} md={4} style={{ lineHeight: 0 }}>
          <img
            src="/img/style-for-makeup/fullscreen.jpg"
            alt=""
            style={{ maxWidth: "100%", lineHeight: 0 }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <div
            style={{
              paddingTop: "calc(50% - 200px)"
            }}
          >
            <div
              style={{
                background: colors.middle,
                color: colors.light,
                textAlign: "center",
                padding: 14,
                margin: "0 auto",
                maxWidth: "70%",
                fontSize: "1.3em",
                fontFamily: "Lora",
                fontWeight: 500
              }}
            >
              ВЫСШАЯ ШКОЛА СТИЛИСТИКИ,
              <br /> ДИЗАЙНА И ТЕХНОЛОГИЙ
            </div>
            <h1
              className={classes.h1}
              style={{
                textTransform: "uppercase",
                color: colors.dark,
                fontFamily: "Lora"
              }}
            >
              Стилистика для визажистов
            </h1>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Head;
