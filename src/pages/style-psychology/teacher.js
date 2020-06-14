import React from "react";
import { Grid } from "@material-ui/core";

import H2 from "../../components/head1";

export default function Teacher() {
  var styles = {
    head: {
      fontFamily: "Roboto",
      fontSize: "1.4em",
      fontWeight: 700,
      textAlign: "left",
      color: "rgb(100,100,100)",
      margin: 0,
      paddingTop: 0,
    },
    descript: {
      fontFamily: "Roboto",
      fontSize: "1.1em",
      fontWeight: 500,
      textAlign: "left",
      color: "rgb(140,140,140)",
      margin: 0,
      padding: "4px 0",
    },
    text: {
      fontFamily: "Roboto",
      fontSize: "1em",
      fontWeight: 400,
      textAlign: "left",
      color: "rgb(100,100,100)",
      margin: 0,
      padding: "4px 0",
    },
    letter: {
      fontFamily: "Roboto",
      fontSize: "6em",
      fontWeight: 700,
      float: "left",
      color: "rgb(255,255,255)",
      margin: 0,
      padding: "0 4px 0 0",
      lineHeight: "0.5em",
    },
    box: {
      background: "rgb(250,247,228)",
      borderRadius: 12,
      padding: 20,
    }
  };

  return(
    <Grid container justify="center" alignItems="flex-start" style={{ padding: 20 }}>
      <Grid item xs={12} md={12}>
        <H2 content="Преподаватели" />
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 10 }}>
        <div style={styles.box}>
          <p style={styles.text}>
            <span style={styles.letter}>&laquo;</span>
            Мой 10-летний опыт практикующего имиджмейкера, несколько психологических образований и многолетняя психологическая практика вдохновили меня на создание этой программы. Данная программа посвящена терапии имидЖА, а не терапии имидЖЕМ. В программу включены методики АРТ-Терапии, работа с коллажами, образами и ассоциациями, методы эмоционально-образной терапии, упражнения из классической психодрамы.
          </p>
          <p style={styles.text}>
            Эта программа не дает готовых рецептов успеха, она дает возможность приобрести глубокую и цельную информацию о себе, развить творческий потенциал и освоить успешные средства для самовыражения и работы с клиентами.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 10 }}>
        <Grid container justify="center" alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="/img/psychology/teacher.jpg"
                alt="Мария Красильникова"
                style={{
                  borderRadius: "50%",
                  maxHeight: 120,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <h3 style={styles.head}>Мария Красильникова</h3>
            <p style={styles.descript}>автор тренинга</p>
            <p style={styles.text}>
              Практикующий имидж-тренер, стилист, психолог, преподаватель факультета «Моды и имиджмейкинга» ВШС
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
} 