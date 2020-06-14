import React from "react";
import Grid from "@material-ui/core/Grid";

function C() {
  return (
    <span style={{ color: "rgb(80,0,0)" }}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
  );
}

function Color(props) {
  return <span style={{ color: "rgb(100,0,0)" }}>{props.t}</span>;
}

export default function About() {
  var styles = {
    head: {
      fontFamily: "Lora",
      fontSize: "1.8em",
      color: "rgb(60,60,60)",
      fontWeight: 500,
      textAlign: "center"
    },
    subtitle: {
      fontSize: "1.2em",
      color: "rgb(100,100,100)",
      fontWeight: 700,
      textAlign: "center"
    },
    text: {
      fontSize: "1em",
      color: "rgb(100,100,100)",
      fontWeight: 400,
      textAlign: "left"
    }
  };

  return (
    <div>
      <h1 style={styles.head}>
        Имидж-консультант &ndash; консультант по моде и стилю
      </h1>
      <p style={styles.subtitle}>
        6 месяцев
        <C />
        60 занятий
        <C />
        254 академических часа
        <C />
        <Color t="50%" />
         теории
        <C />
        <Color t="50%" />
         практики
        <C />
        <Color t="Диплом" />
      </p>
      <Grid container justify="center" alignItems="flex-start" spacing={2}>
        <Grid item xs={12} md={6}>
          <p style={styles.text}>
            <img
              src="/img/profashion/girl_mono.svg"
              alt=""
              style={{ height: 60, float: "left", margin: 8 }}
            />
            Начинающим эта программа поможет найти свой путь в мире моды,
            сделать важный щаг к воплощению мечты в реальность. Выбирайте
            специализацию в области моды, изучайте имиджелогию профессионально.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <p style={styles.text}>
            <img
              src="/img/profashion/woman_mono.svg"
              alt=""
              style={{ height: 60, float: "left", margin: 8 }}
            />
            Практикующие специалисты индустрии моды получат актуальные знания,
            новые возможности для профессионального развития + диплом с правом
            деятельности в области имидж-консалтинга.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
