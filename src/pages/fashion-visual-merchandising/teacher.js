import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";

export default function Teacher() {
  var styles = {
    image: {
      borderRadius: "50%",
      height: 200
    },
    imageBox: {
      textAlign: "center",
      padding: 10,
      boxSizing: "border-box",
      margin: 0
    },
    link: {
      color: "rgb(100,100,100)",
      textDecoration: "none"
    },
    text: {
      fontSize: "1em",
      fontWeight: 400,
      color: "rgb(100,100,100)",
      textAlign: "left",
      padding: 5,
      margin: 0
    },
    title: {
      fontFamily: "Roboto",
      fontSize: "1.2em",
      fontWeight: 700,
      color: "rgb(100,100,100)",
      textAlign: "left",
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
        <div style={styles.imageBox}>
          <a href="https://styleschool.ru/user/profile.php?id=161">
            <img
              src="/img/merchandisign/teacher.jpg"
              alt="Сергей Юрьев"
              style={styles.image}
            />
          </a>
        </div>
      </Grid>
      <Grid item xs={12} md={7}>
        <h4 style={styles.title}>
          <a
            href="https://styleschool.ru/user/profile.php?id=161"
            style={styles.link}
          >
            Сергей Юрьев
          </a>
        </h4>
        <p style={styles.text}>
          <a
            href="https://styleschool.ru/user/profile.php?id=161"
            style={styles.link}
          >
            Специалист-практик, преподаватель курса профподготовки «Визуальный
            мерчендайзинг и витринистика» ВШС. Опыт управления в области ВМ в
            компаниях: Rendez-vouz, Adidas, Metro Group, Азбука Вкуса. Активный
            консалтинг малого бизнеса в вопросах открытия магазинов, построения
            системы и автоматизации ВМ, антикризисного и emergency ВМ.
          </a>
        </p>
      </Grid>
    </Grid>
  );
}
