import React from "react";
import { Grid, Hidden, Paper } from "@material-ui/core";
import { styles, colors, useStyle } from "./styles";

const Head = props => {
  const classes = useStyle();
  return (
    <div
      style={{
        background:
          "url(/img/marketing-for-stylists/fullscreen.jpg) center / cover no-repeat"
      }}
    >
      <Grid container justify="center">
        <Hidden smDown>
          <Grid item md={2} />
        </Hidden>
        <Grid item xs={12} md={8}>
          <div style={styles.head}>
            <h1
              style={{
                ...styles.h1,
                color: colors.white,
                textShadow: "0px 0px 3px rgba(0,0,0,1)"
              }}
            >
              Маркетинг для стилистов и имиджмейкеров:
              <br />
              создание личного бренда в социальных сетях
            </h1>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid item md={2} />
        </Hidden>
        <Grid item xs={12} md={10}>
          <div>
            <h4 style={{ ...styles.h4, color: colors.white }}>
              Авторский онлайн-курс Александры Бодровой
            </h4>
            <h4 className={classes.h4} style={{ color: colors.white }}>
              Старт: 32 декабря 2019
            </h4>
            <div style={{ height: 32 }} />
            <Grid container justify="center" spacing={4}>
              <Grid item xs={12} md={6}>
                <a href="#register">
                  <Paper className={classes.buttonWhite}>
                    Зарегистрироваться
                  </Paper>
                </a>
              </Grid>
              <Grid item xs={12} md={6}>
                <a href="#programma">
                  <Paper className={classes.buttonWhite}>
                    Узнать программу
                  </Paper>
                </a>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <div style={{ height: 48 }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Head;
