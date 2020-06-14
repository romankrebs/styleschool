import React from "react";
import { Grid } from "@material-ui/core";
import { styles } from "./styles";

const Top = () => {
  return (
    <div>
      <Grid container spacing={3} style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Grid item xs={3} md={3} style={{ textAlign: "center" }}>
          <a href="https://styleschool.ru/">
            <img
              src="/img/logo.png"
              alt="ВШСДТ"
              style={{ height: 24, marginBottom: -6 }}
            />
            &ensp;
            <span
              style={{
                fontFamily: "Alice"
              }}
            >
              #ВШСДТ
            </span>
          </a>
        </Grid>
        <Grid item xs={3} md={3} style={styles.topLine}>
          <a href="#aboutCourse">О курсе</a>
        </Grid>
        <Grid item xs={3} md={3} style={styles.topLine}>
          <a href="#programma">Программа</a>
        </Grid>
        <Grid item xs={3} md={3} style={styles.topLine}>
          <a href="#price">Цены</a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Top;
