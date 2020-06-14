import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";

export default function Teacher() {
  var styles = {
    title: {
      fontSize: "1.1em",
      color: "rgb(100,100,100)",
      fontWeight: 700,
      padding: 5,
      margin: 0
    },
    text: {
      fontSize: "1em",
      color: "rgb(100,100,100)",
      padding: 5,
      margin: 0
    }
  };

  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <H2 content="Преподаватель" />
      </Grid>
      <Grid item xs={12} md={3}>
        <div style={{ textAlign: "center" }}>
          <a href="/emilia_zhilova">
            <img
              src="/img/photocourse/teacher.jpg"
              alt="Эмилия Жилова"
              style={{
                borderRadius: "50%",
                height: 200
              }}
            />
          </a>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <a href="/emilia_zhilova">
          <h3 style={styles.title}>Эмилия Жилова</h3>
        </a>
        <p style={styles.text}>
          Преподаватель (Высшая школа стилистики) и Beauty & Fashion Фотограф,
          владелец, руководитель EYA contemporary jewelry.
        </p>
        <p style={styles.text}>
          Личная страница в{" "}
          <a href="https://www.instagram.com/emiliazhilova">Instagram</a>
        </p>
      </Grid>
    </Grid>
  );
}
