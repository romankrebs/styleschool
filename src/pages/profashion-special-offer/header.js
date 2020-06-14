import React from "react";
import { Grid, Paper, Hidden } from "@material-ui/core";
import { datas } from "./dates";
// import Socnet from "../../components/socnets-icons-buttons";

let styles = {
  top: {
    background: "rgba(255,255,255,0.8)",
    padding: 5,
    paddingLeft: 20
  },
  fullscreen: {
    background:
      "url(/img/profashion/bkg.jpg) top right / auto 100% no-repeat, rgb(236,236,226)"
  },
  fullscreenMobile: {
    background:
      "url(/img/profashion/bkg.jpg) top center / auto 100% no-repeat, rgb(236,236,226)"
  },
  block: {
    paddingTop: 60,
    paddingBottom: 40
  },
  paper: {
    background: "rgba(100,135,145,1)",
    padding: 20
  },
  head: {
    fontFamily: "Lora",
    fontSize: "1.8em",
    color: "rgb(255,255,255)",
    fontWeight: 700,
    textAlign: "center",
    padding: 10,
    margin: 0
  },
  descript: {
    fontSize: "1em",
    color: "rgb(255,255,255)",
    fontWeight: 400,
    textAlign: "center",
    margin: 0,
    padding: 5
  },
  line: {
    height: 0,
    width: "40%",
    margin: "0 auto",
    border: 0,
    borderTop: "1px solid rgb(255,255,255)"
  }
};

function Bkg(props) {
  return (
    <div style={props.bkg}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <Grid item xs={11} md={6} style={styles.block}>
          <Paper style={styles.paper}>
            <h1 style={styles.head}>Имидж-консультант</h1>
            <div style={styles.line} />
            <p style={styles.descript}>
              Профессиональное обучение для тех, кто хочет сделать карьеру
              в&nbsp;индустрии моды или стать дипломированным консультантом
              по&nbsp;моде и стилю.
            </p>
            <p style={styles.descript}>{"{ Очно | Дистанционно }"}</p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container justify="center" alignItems="stretch">
            <Grid
              item
              xs={12}
              sd={6}
              md={3}
              style={{ padding: "30px 10px 10px" }}
            >
              <Paper style={{ ...styles.paper, padding: "5px 8px" }}>
                <p style={styles.descript}>
                  Ближайший набор:
                  <br />
                  {datas.ofline[0].date}
                </p>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sd={12}
              md={3}
              style={{ padding: "30px 10px 10px" }}
            >
              <Paper style={{ ...styles.paper, padding: "5px 8px" }}>
                <p style={styles.descript}>
                  Обучение
                  <br />
                  от 9900 рублей
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Hidden implementation="css" smDown>
            <Grid item xs={12} md={12}>
              <div style={{ height: 40 }} />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
}

export default function Header() {
  return (
    <div>
      <Hidden implementation="css" smDown>
        <Bkg bkg={styles.fullscreen} />
      </Hidden>
      <Hidden implementation="css" mdUp>
        <Bkg bkg={styles.fullscreenMobile} />
      </Hidden>
    </div>
  );
}
