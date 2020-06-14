import React from "react";
import { Grid, Hidden } from "@material-ui/core";

export default function Header(props) {
  return (
    <div
      style={{
        background:
          "url(/img/jewelry/fullscreen.jpg) left top / 100% auto no-repeat",
        maxWidth: 1000,
        margin: "0 auto",
        marginBottom: 24
      }}
    >
      <Grid container justify="flex-end" alignItems="flex-start">
        <Grid item xs={12} md={5} style={{ padding: 8 }}>
          <h2
            style={{
              fontSize: "1.6em",
              textAlign: "center",
              color: "rgb(0,0,0)",
              fontWeight: 700,
              padding: "12px 8px",
              background: "rgba(255,255,255,0.125)",
              margin: 0
            }}
          >
            Украшения к одежде:
            <br />
            для кого, для чего, как?
          </h2>
          <div
            style={{
              fontSize: "1.1em",
              textAlign: "center",
              color: "rgb(255,255,255)",
              background: "rgba(0,0,0,0.5)",
              padding: "4px 12px",
              margin: 0
            }}
          >
            Авторский курс Марины Бонецкой
          </div>
          <Hidden implementation="css" smDown>
            <div style={{ height: "10em" }} />
          </Hidden>
          <Hidden implementation="css" mdUp>
            <div style={{ height: "2em" }} />
          </Hidden>
        </Grid>
      </Grid>
    </div>
    // <Head
    //   head={props.title}
    //   subtitle={<span>8 встреч | 32 академ. часа | ОЧНО | ONLINE</span>}
    // />
  );
}
