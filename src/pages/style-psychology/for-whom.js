import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";

export default function ForWhom() {
  var styles = {
    number: {
      fontFamily: "Roboto",
      fontSize: "2em",
      fontWeight: 500,
      textAlign: "center",
      color: "rgb(120,0,0)",
      margin: 0,
      padding: 20,
    },
    text: {
      fontFamily: "Roboto",
      fontSize: "1em",
      fontWeight: 400,
      textAlign: "center",
      color: "rgb(80,80,80)",
    },
  };
  
  return(
    <Grid container justify="center" alignItems="center" style={{ padding: 20 }}>
      <Grid item xs={12} md={12}>
        <H2 content="Для кого:" />
      </Grid>
      <Grid item xs={12} md={10}>
        <Grid container justify="center" alignItems="center" style={{ padding: 20 }}>
          <Grid item xs={12} md={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="/img/psychology/1.jpg"
                alt=""
                style={{
                  height: 240,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={styles.number}>1.</p>
            <p style={styles.text}>для тех, кто хочет выйти за рамки цветотипов</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="/img/psychology/2.jpg"
                alt=""
                style={{
                  height: 240,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={styles.number}>2.</p>
            <p style={styles.text}>
              для тех, кто хочет познавать себя, изучить себя глубже, чем «какой цвет мне идёт»
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="/img/psychology/3.jpg"
                alt=""
                style={{
                  height: 240,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p style={styles.number}>3.</p>
            <p style={styles.text}>
            для тех, кто хочет познакомиться со своим истинным стилем и реализовать его, понять свои предпочтения в одежде, ограничения, особенности
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
        <p style={styles.number}>4.</p>
        <p style={styles.text}>
          для тех, кто хочет научиться покупать «психологически» свои вещи в магазине
        </p>
      </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}