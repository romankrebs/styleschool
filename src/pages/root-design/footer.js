import React from "react";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import { withStyles, createStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const font = "Roboto";
const size = "0.9em";

const styles = createStyles({
  campus: {
    "&:link": {
      textDecoration: "none",
      color: "rgb(100,123,67)",
      fontFamily: font
    },
    "&:visited": {
      textDecoration: "none",
      color: "rgb(103,123,67)",
      fontFamily: font
    },
    "&:hover": {
      textDecoration: "none",
      color: "rgb(80,103,47)",
      fontFamily: font
    }
  },
  head: {
    textAlign: "left",
    fontFamily: font,
    fontSize: "1.2em",
    color: "rgb(60,60,60)"
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(170,170,170,1) 0%, rgba(220,220,220,1.0) 10%, rgba(220,220,220,1) 100%)",
        borderTop: "4px solid rgb(255,255,255)"
      }}
    >
      <Grid
        container
        justify="flex-start"
        style={{
          background:
            "linear-gradient(rgba(170,170,170,1) 0%, rgba(220,220,220,1.0) 10%, rgba(220,220,220,1) 100%)",
          textAlign: "left",
          padding: 20,
          paddingTop: 0,
          maxWidth: 1000,
          margin: "0 auto",
          fontFamily: font
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          style={{ padding: 10, fontFamily: font, fontSize: size }}
        >
          <h2 className={classes.head} style={{ fontFamily: font }}>
            Кампус
          </h2>
          <a href="http://styleschool.ru/" className={classes.campus}>
            Москва
          </a>
          <br />
          <a href="http://novosib.styleschool.ru/" className={classes.campus}>
            Новосибирск
          </a>
          <br />
          <a href="http://bishkek.styleschool.ru/" className={classes.campus}>
            Бишкек
          </a>
          {/* <a href="http://smolensk.styleschool.ru/" className={classes.campus}>
            Смоленск
          </a>
          <br />
          <a href="https://styleschool.ru/club" className={classes.campus}>
            Клуб выпускников
          </a> */}
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{ padding: 10, fontFamily: font, fontSize: size }}
        >
          <h2 className={classes.head} style={{ fontFamily: font }}>
            Партнеры
          </h2>
          Российский государственный социальный университет
          <br />
          Российский государственный университет туризма и сервиса
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 10, fontFamily: font }}>
          <h2 className={classes.head} style={{ fontFamily: font }}>
            Адрес
          </h2>
          г. Москва, Проспект Мира, дом&nbsp;101, стр.&nbsp;1, 600&nbsp;офис
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ padding: 10, fontFamily: font, fontSize: size }}
        >
          <h2 className={classes.head} style={{ fontFamily: font }}>
            Телефоны
          </h2>
          +7 (495) 221-89-35
          <br />8 (800) 550-78-93
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ padding: 10, fontFamily: font, fontSize: size }}
        >
          <h2 className={classes.head} style={{ fontFamily: font }}>
            Время работы:
          </h2>
          Пн - Пт с 10:00 до 19:00 (мск)
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{ padding: 10, fontFamily: font, fontSize: size }}
        >
          <Link to="/information">
            <span style={{ color: "rgb(123,143,87)", fontFamily: font }}>
              Информация для пользователей
            </span>
          </Link>
          <br />
          <a href="/information-about-educational-organization" target="_blank">
            <span style={{ color: "rgb(123,143,87)", fontFamily: font }}>
              Сведения об образовательной организации
            </span>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Footer);
