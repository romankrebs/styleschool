import React from "react";
import Grid from "@material-ui/core/Grid";

import List from "../../components/list";

export default function About() {
  var styles = {
    head: {
      fontFamily: "Roboto",
      fontSize: "1.5em",
      fontWeight: 700,
      textAlign: "left",
      margin: 0,
      padding: 10,
      color: "rgb(100,100,100)"
    },
    text: {
      fontSize: "1em",
      fontWeight: 400,
      textAlign: "left",
      margin: 0,
      padding: "5px 10px",
      color: "rgb(100,100,100)"
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      style={{ padding: 20 }}
    >
      <Grid item xs={12} md={6}>
        <h3 style={styles.head}>Результат обучения на курсе:</h3>
        <List
          arr={[
            "владение актуальной информацией о трендах и брендах",
            "свободное и уверенное общение с клиентами и партенерами на профессиональном языке",
            "профессиональная и деловая эффективность"
          ]}
          style={styles.text}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <h3 style={styles.head}>Параметры курса:</h3>
        <p style={styles.text}>
          <b>Длительность:</b>
        </p>
        <p style={styles.text}>1 месяц \ 16 занятий \ 32 ак. ч.</p>
        <p style={styles.text}>
          <b>Как проходит обучение:</b>
        </p>
        <p style={styles.text}>
          <b>Теория</b> &mdash; в записи, <b>практика</b> &mdash; очные встречи
          или вебинары
        </p>
        <p style={styles.text}>
          По итогам обучения проводится тестирование. При успешном прохождении
          тестирования выдается документ: удостоверение о повышении квалификации
        </p>
      </Grid>
    </Grid>
  );
}
