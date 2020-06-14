import React from "react";
import { Grid, Paper } from "@material-ui/core";
// import Button0 from "../../components/button0";

export const datas = {
  online: []
};

const style = {
  head: {
    fontFamily: "Roboto",
    fontSize: "2em",
    fontWeight: 700,
    textAlign: "center",
    color: "rgb(100,100,100)",
    padding: "30px 0",
    margin: 0
  },
  title: {
    // fontFamily: "Roboto",
    fontSize: "1.7em",
    fontWeight: 500,
    textAlign: "center",
    color: "rgb(100,100,100)",
    padding: "24px 0",
    margin: 0
  },
  text: {
    textAlign: "center",
    font: "400 1em",
    color: "rgb(100,100,100)"
  }
};

export default function Dates() {
  return (
    <div>
      {datas.online[0] ? (
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} md={12}>
            <h2 style={style.head}>Ближайшие даты</h2>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper style={{ padding: 10 }}>
              <h3 style={style.title}>Дистанционно</h3>
              <div style={{ background: "rgb(230,230,230)", width: "100%" }}>
                <p
                  style={{
                    textAlign: "center",
                    font: "400 1.3em",
                    color: "rgb(100,100,100)",
                    margin: 0,
                    padding: 4
                  }}
                >
                  {datas.online[0]}
                </p>
              </div>
              <p style={style.text}>
                <img src="/img/green/clock.svg" alt="" style={{ height: 14 }} />
                &nbsp; Длительность: 8 месяцев
              </p>
              <p style={style.text}>
                Доступ к лекциям и практическим занятиям с использованием
                современных дистанционных технологий обучения
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper
              style={{
                background: "rgb(255,250,240)",
                padding: 4
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  font: "400 0.9em",
                  color: "rgb(100,100,100)",
                  padding: 4,
                  margin: 0
                }}
              >
                * Сроки подачи документов для зачисления на курс{" "}
                <b>до 21 ноября 2017 года</b>
              </p>
            </Paper>
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
}
