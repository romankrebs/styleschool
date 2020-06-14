import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Marker from "../../components/marker-paper";

export const datas = {
  ofline: ["февраль 2020 г."]
};

export default function Date(props) {
  const style = {
    p: {
      fontSize: "1.6em",
      color: "rgb(100,100,100)",
      textAlign: "center",
      fontFamily: "Roboto"
    },
    red: {
      color: "rgb(140,0,0)",
      fontWeight: 700
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="stretch"
      spacing={2}
      style={{ paddingTop: 30 }}
    >
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontFamily: props.fontTitle ? props.fontTitle : "Futura Normal",
            fontSize: "2em"
          }}
        >
          Ближайший набор
        </h2>
      </Grid>
      <Grid item xs={12} md={6} style={{ height: "100%" }}>
        <Marker
          head={{
            content: "Очно",
            style: { fontFamily: props.font ? props.font : "Futura Normal" }
          }}
          text={{
            content: (
              <span
                style={{
                  fontFamily: props.font ? props.font : "Futura-Normal"
                }}
              >
                Курс: <b>9</b> месяцев, <b>50</b> лекций по стилям + <b>10</b>{" "}
                лекций по десятилетиям
              </span>
            ),
            style: {
              textAlign: "center",
              fontFamily: props.font ? props.font : "Futura Normal"
            }
          }}
          marker={{
            content: datas.ofline[0],
            style: {
              textAlign: "center",
              background: "rgba(240,240,240,1)",
              fontFamily: props.font ? props.font : "Futura-Normal"
            }
          }}
          block={{
            style: { height: "100%", padding: 15 }
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          style={{
            padding: 10
          }}
        >
          <p style={style.p}>
            <span style={style.red}>
              15
              <sup>000</sup> &#8381;
            </span>{" "}
            в месяц
          </p>
          <p style={{ ...style.p, fontSize: "1em" }}>или</p>
          <p style={style.p}>
            <span style={style.red}>
              5<sup>000</sup> &#8381;
            </span>{" "}
            за одно занятие
          </p>
        </Paper>
        {/* <Message
          message1={{
            text: (
              <span>
                15 <sup style={{ fontSize: "0.8em" }}>000</sup> ₽
              </span>
            ),
            style: {
              margin: 0,
              padding: 24,
              fontFamily: props.font ? props.font : "Futura-Normal"
            }
          }}
          message2={{
            text: "В МЕСЯЦ",
            style: {
              margin: 0,
              padding: 20,
              fontFamily: props.font ? props.font : "Futura-Normal"
            }
          }}
          block={{
            style: { padding: 15 }
          }}
        /> */}
      </Grid>
    </Grid>
  );
}
