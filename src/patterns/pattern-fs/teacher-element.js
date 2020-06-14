import React from "react";
import { Grid } from "@material-ui/core";
import ButtonVideo from "./button-video";
import ButtonLink from "./button-black";

const styles = {
  h1: {
    fontFamily: "Roboto",
    fontSize: "2rem",
    fontWeight: 700,
    color: "rgb(80,80,80)",
    textAlign: "center",
    margin: 0,
    padding: "2rem 0",
    paddingTop: 0
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "1.6rem 0 1.4rem 0"
  },
  h3Big: {
    fontFamily: "Roboto",
    fontSize: "1.3em",
    fontWeight: 700,
    color: "rgb(123,143,87)",
    textAlign: "center",
    margin: 0,
    padding: "1em 0"
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "1em 0"
  },
  p: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "left",
    margin: 0,
    padding: 0,
    paddingBottom: "0.5em",
    lineHeight: "1.5em"
  },
  pJust: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "justify",
    margin: 0,
    padding: 0,
    paddingBottom: "0.5em",
    lineHeight: "1.5em"
  },
  pCenter: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: 0,
    paddingBottom: "0.5em",
    lineHeight: "1.5em"
  },
  pIll: {
    fontFamily: "Roboto",
    fontSize: "0.8em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: 0,
    lineHeight: "1.2em"
  },
  image: {
    maxHeight: 350
  },
  imageBox: {
    textAlign: "center"
  }
};

function Teacher(obj) {
  const content = {
    image: (
      <div style={styles.pCenter}>
        <img src={obj.image} alt={obj.name} style={styles.image} />
      </div>
    ),
    text: (
      <div>
        <h3 style={styles.h3}>{obj.name}</h3>
        <p style={styles.p}>{obj.text}</p>
        {obj.instagram ? (
          <p style={{ ...styles.p, ...styles.pCenter }}>
            <a href={`https://www.instagram.com/${obj.instagram}/`}>
              <img
                src="/img/green/instagram.svg"
                alt={obj.instagram}
                style={{ height: 24, marginBottom: -6 }}
              />
            </a>
            &ensp;
            <a href={`https://www.instagram.com/${obj.instagram}/`}>
              @{obj.instagram}
            </a>
          </p>
        ) : null}
        {obj.buttons ? (
          <Grid container justify="center">
            {obj.buttons.detail ? (
              <Grid item xs={6} md={6}>
                <ButtonLink
                  text="подробнее"
                  center
                  link={obj.buttons.detail ? obj.buttons.detail : false}
                  linkInside={obj.buttons.linkInside ? true : false}
                />
              </Grid>
            ) : null}
            {obj.buttons.video ? (
              <Grid item xs={6} md={6} style={{ padding: "1rem" }}>
                <ButtonVideo
                  text={<span>интервью&emsp;&#9658;</span>}
                  linkVideo={obj.buttons.video}
                />
              </Grid>
            ) : null}
          </Grid>
        ) : null}
      </div>
    )
  };
  return content;
}

export default Teacher;
