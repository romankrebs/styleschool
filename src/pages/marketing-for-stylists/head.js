import React from "react";
import { Grid, Paper, Hidden } from "@material-ui/core";
import { styles, colors } from "./styles";

const Head = props => {
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
        <Grid item xs={12} md={3} style={styles.headBoxs}>
          <Paper style={styles.headPaper}>
            ХХ месяцев
            <br />
            ХХ занятий
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} style={styles.headBoxs}>
          <Paper style={styles.headPaper}>
            дистанционно
            <br />
            ХХ академ. часа
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} style={styles.headBoxs}>
          <Paper style={styles.headPaper}>
            50% теории
            <br />
            50% практики
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <div style={{ height: 48 }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Head;
