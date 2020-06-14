import React from "react";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import { withStyles, createStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const font = "Roboto";
const size = "0.9em";

const styles = createStyles({
  campus: {
    color: "rgb(229,183,101)",
    "&:link": {
      textDecoration: "none",
      color: "rgb(229,183,101)",
      fontFamily: font
    },
    "&:visited": {
      textDecoration: "none",
      color: "rgb(229,183,101)",
      fontFamily: font
    },
    "&:hover": {
      textDecoration: "none",
      color: "rgb(254,232,123)",
      fontFamily: font
    }
  },
  head: {
    textAlign: "left",
    fontFamily: font,
    fontSize: "1.2em",
    color: "rgb(229,183,101)"
  },
  text: {
    fontFamily: "inherit",
    fontSize: "1em",
    color: "rgb(200,200,200)"
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <div
      style={{
        background: "rgb(10,50,10)",
        // "linear-gradient(rgba(101,66,34,1) 0%, rgba(101,66,34,.9) 10%, rgba(101,66,34,.7) 100%)",
        borderTop: "4px solid rgb(229,183,101)"
      }}
    >
      <Grid
        container
        justify="flex-start"
        style={{
          // background:
          //  "linear-gradient(rgba(170,170,170,1) 0%, rgba(220,220,220,1.0) 10%, rgba(220,220,220,1) 100%)",
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
          <span className={classes.text}>
            Российский государственный социальный университет
            <br />
            Российский государственный университет туризма и сервиса
          </span>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 10, fontFamily: font }}>
          <h2 className={classes.head} style={{ fontFamily: font }}>
            Адрес
          </h2>
          <span className={classes.text}>
            г. Москва, Проспект Мира, дом&nbsp;101, стр.&nbsp;1, 600&nbsp;офис
          </span>
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
          <span className={classes.text}>
            +7 (495) 221-89-35
            <br />8 (800) 550-78-93
          </span>
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
          <span className={classes.text}>Пн - Пт с 10:00 до 19:00 (мск)</span>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{ padding: 10, fontFamily: font, fontSize: size }}
        >
          <Link to="/information">
            <span className={classes.campus}>Информация для пользователей</span>
          </Link>
          <br />
          <a href="/information-about-educational-organization" target="_blank">
            <span className={classes.campus}>
              Сведения об образовательной организации
            </span>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Footer);
