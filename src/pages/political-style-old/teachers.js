import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Teachers() {
  const styles = {
    image: {
      width: 160,
      borderRadius: "50%"
    },
    name: {
      padding: 5,
      font: '700 1.6em "Roboto"',
      color: "rgb(100,100,100)",
      textAlign: "center"
    },
    text: {
      font: '400 1em "Roboto"',
      color: "rgb(80,80,80)",
      textAlign: "left"
    },
    head: {
      fontFamily: "Roboto",
      fontSize: "1.8em",
      textAlign: "center",
      color: "rgb(100,100,100)"
    }
  };

  const teachers = {
    a: {
      name: "Валерий Чередниченко",
      text:
        "Кандидат экономических наук, социолог, бизнес-тренер, политтехнолог Директор Института стратегических исследований и проектов",
      image: "/img/political-style/teacher02.jpg",
      link: "/valery_cherednichenko"
    },
    b: {
      name: "Мария Родина",
      text:
        "Кандидат политических наук, психолог, бизнес-тренер, политтехнолог, Директор фонда «Общественных инициатив»",
      image: "/img/political-style/teacher01.jpg",
      link: "/maria_rodina"
    }
  };

  return (
    <Grid container justify="center" alignItems="flex-start" spacing={4}>
      <Grid item xs={12} md={12}>
        <h2 style={styles.head}>Преподаватели</h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <div style={{ textAlign: "center" }}>
          <a href={teachers.b.link}>
            <img
              src={teachers.b.image}
              alt={teachers.b.name}
              style={styles.image}
            />
          </a>
        </div>
        <a href={teachers.b.link}>
          <p style={styles.name}>{teachers.b.name}</p>
        </a>
        <p style={styles.text}>{teachers.b.text}</p>
      </Grid>
      <Grid item xs={12} md={6}>
        <div style={{ textAlign: "center" }}>
          <a href={teachers.a.link}>
            <img
              src={teachers.a.image}
              alt={teachers.a.name}
              style={styles.image}
            />
          </a>
        </div>
        <a href={teachers.a.link}>
          <p style={styles.name}>{teachers.a.name}</p>
        </a>
        <p style={styles.text}>{teachers.a.text}</p>
      </Grid>
    </Grid>
  );
}
