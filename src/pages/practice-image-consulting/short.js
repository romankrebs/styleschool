import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function Short() {
  const styles = {
    head: {
      fontFamily: "Roboto",
      fontSize: "2em",
      color: "rgb(100,100,100)",
      textAlign: "center"
    },
    text: {
      fontSize: "1em",
      color: "rgb(100,100,100)",
      textAlign: "left"
    },
    button: {
      padding: 20,
      textAlign: "center",
      fontSize: "1em",
      color: "rgb(100,100,100)"
    }
  };
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={10}>
        <h2 style={styles.head}>Практика имидж-консультирования</h2>
        <Grid container justify="center">
          <Grid item xs={12} md={6} style={{ padding: 30 }}>
            <Paper style={styles.button}>
              <a href="#practice1">Практика #1</a>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: 30 }}>
            <Paper style={styles.button}>
              <a href="#practice2">Практика #2</a>
            </Paper>
          </Grid>
        </Grid>
        <p style={styles.text}>
          Практика имидж-консультирования и шопинг-сопровождения клиентов
          проводится на основе актуальных методик в имидж-консалтинге. Программы
          практик рассчитаны на слушателей и выпускников курсов профподготовки
          Высшей школы стилистики «Имидж-консалтинг и fashion-styling»
          дистанционного формата обучения. Практики могут быть выбраны
          слушателями ВШС по своему желанию и оплачиваются отдельно от курса
          профподготовки.
        </p>
      </Grid>
    </Grid>
  );
}
