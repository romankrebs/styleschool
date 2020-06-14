import React from "react";
import Grid from "@material-ui/core/Grid";

// import Top from "../../components/topmenu";

export default function Header() {
  var styles = {
    top: {
      background: "rgba(255,255,255,0.8)",
      padding: 5,
      paddingLeft: 20
    },
    fullscreen: {
      //background: "url(/img/aristotwist/bkg.png) top 60px right / auto 100% no-repeat,rgba(0,0,12,1)"
      background: "rgba(0,0,12,1)"
    },
    head: {
      fontFamily: "Cormorant Garamond",
      fontSize: "4em",
      color: "rgb(255,255,255)",
      textAlign: "center",
      fontWeight: 400,
      padding: 0,
      margin: 10
    },
    text: {
      fontFamily: "Lora",
      fontSize: "0.8em",
      color: "rgb(255,255,255)",
      textAlign: "center",
      padding: 10,
      margin: 0
    },
    block: {
      padding: "10% 20% 15% 20%"
    }
  };

  return (
    <Grid container justify="flex-start" style={styles.fullscreen}>
      <Grid item xs={12} md={6}>
        <div style={styles.block}>
          <h1 style={styles.head}>ЭТИКЕТ</h1>
          <p style={styles.text}>Авторский курс Ксении Ферзь</p>
          <p style={styles.text}>{"{ Online }"}</p>
          <p style={styles.text}>
            ЭТИКЕТ &mdash; ЭТО СОЦИАЛЬНАЯ КОНВЕНЦИЯ.<br />
            ИМИДЖ &mdash; ЭТО ПЕРСОНАЛЬНАЯ АМБИЦИЯ.<br />
            МОЕ МАСТЕРСТВО &mdash; В УМЕНИИ ИХ ПРИМИРИТЬ.
          </p>
          <p style={{
            ...styles.text,
            padding: 0,
            margin: 0,
            textAlign: "right",
            fontStyle: "italic",
            fontSize: "0.7em"
            }}>
            КСЕНИЯ ФЕРЗЬ
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={6} style={{  background: "url(/img/aristotwist/bkg.png) top 60px left 50% / auto 100% no-repeat" }}><div style={{ height: 300, width: 200 }} /></Grid>
    </Grid>
  );
}