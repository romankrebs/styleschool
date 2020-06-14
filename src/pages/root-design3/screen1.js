import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Link from "./link";

const styles = theme => ({
  name: {
    fontFamily: "Roboto",
    fontSize: "1.8em",
    fontWeight: 700,
    color: "rgb(187,144,41)", // "rgb(229,183,101)", // "rgb(172,133,70)",
    textAlign: "center"
  },
  link: {
    color: "rgb(100,0,0)",
    "&:hover": {
      color: "rgb(160,0,0)"
    }
  },
  "@media (max-width: 500px)": {
    name: {
      fontSize: "1.3em"
    }
  }
});

const font = "Roboto";

const Bull = props => {
  return (
    <span
      style={{
        color: props.color || "rgb(172,133,70)",
        fontSize: "1em",
        fontWeight: 900,
        ...props.style
      }}
    >
      {" "}
      &bull;{" "}
    </span>
  );
};

const Screen = props => {
  const { classes } = props;

  return (
    <div
      style={{
        paddingBottom: 24
      }}
    >
      <Grid container>
        {/* <Grid item xs={12} md={12}>
          <div
            style={{
              textAlign: "center",
              fontWeight: 600,
              fontFamily: font,
              color: "rgb(30,30,30)",
              fontSize: "1.2em",
              paddingTop: 24,
              paddingBottom: 24
            }}
          >
            Профессиональное образование в индустрии моды и дизайна
          </div>
        </Grid> */}
        <Grid
          item
          xs={12}
          md={12}
          style={{
            textAlign: "center",
            paddingTop: "15vh",
            paddingBottom: "5vh"
          }}
        >
          <img
            src="/img/root-design/logo-gold2.png"
            style={{ height: "30vh" }}
            alt="#ВШСДТ"
          />
        </Grid>
        <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
          <h1 className={classes.name}>
            ВЫСШАЯ ШКОЛА СТИЛИСТИКИ,
            <br />
            ДИЗАЙНА И ТЕХНОЛОГИЙ
          </h1>
        </Grid>

        <Grid item xs={12} md={12}>
          <div
            style={{
              fontSize: "0.9em",
              fontWeight: 500,
              textAlign: "center",
              lineHeight: "1.6em",
              padding: 0,
              margin: 0
            }}
          >
            <Hidden mdUp>
              <span>
                <a href="/styleschool">
                  <span className={classes.link}>Школа стиля</span>
                </a>
                <Bull />
                <a href="/fashionschool">
                  <span className={classes.link}>Школа моды</span>
                </a>
                <br />
                <a href="/schoolofdesign">
                  <span className={classes.link}>Школа дизайна</span>
                </a>
                <Bull />
                <a href="/artschool">
                  <span className={classes.link}>Школа искусств</span>
                </a>
                <br />
                <a href="/schoolofmanagement">
                  <span className={classes.link}>Школа управления</span>
                </a>
              </span>
            </Hidden>
            <Hidden smDown>
              <span>
                <a href="/styleschool">
                  <span className={classes.link}>Школа стиля</span>
                </a>
                <Bull />
                <a href="/fashionschool">
                  <span className={classes.link}>Школа моды</span>
                </a>
                <Bull />
                <a href="/schoolofdesign">
                  <span className={classes.link}>Школа дизайна</span>
                </a>
                <br />
                <a href="/artschool">
                  <span className={classes.link}>Школа искусств</span>
                </a>
                <Bull />
                <a href="/schoolofmanagement">
                  <span className={classes.link}>Школа управления</span>
                </a>
              </span>
            </Hidden>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Screen);
