import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "./teachers-big-slider"; // "react-slick";
// import Button from "./psevdo-button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageText from "./image-text-blocks";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

var wStyles = theme => styles;

function Teachers(props) {
  var { classes } = props;

  var settings = {
    infinite: true,
    // centerPadding: "50px",
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  var style = {
    text: {
      fontFamily: '"Hevletica", "Roboto"',
      fontSize: "1.25em",
      color: "rgb(80,80,80)",
      textAlign: "center",
      margin: 0,
      padding: 10
    },
    head: {
      fontFamily: '"Hevletica", "Roboto"',
      fontSize: "1.75em",
      textAlign: "center",
      color: "rgb(134,158,94)",
      margin: 0,
      padding: 20
    }
  };

  var content = [
    {
      image: "/img/teachers/lamonova-q.jpg",
      name: "преподаватель Елена Ламонова",
      link: "/elena-lamonova"
    },
    {
      image: "/img/teachers/marina-kostarnova.jpg",
      name: "преодаватель Марина Костарнова",
      link: "/marina_kostarnova"
    },
    {
      image: "/img/teachers/galina-varakina.jpg",
      name: "преподаватель Галина Варакина",
      link: "/galina_varakina"
    },
    {
      image: "/img/teachers/rotar_qu.jpg",
      name: "преподаватель Татьяна Ротарь",
      link: "/tatyana_rotar"
    },
    {
      image: "/img/teachers/lamonova-q.jpg",
      name: "преподаватель Елена Ламонова",
      link: "/elena-lamonova"
    },
    {
      image: "/img/teachers/marina-kostarnova.jpg",
      name: "преодаватель Марина Костарнова",
      link: "/marina_kostarnova"
    },
    {
      image: "/img/teachers/galina-varakina.jpg",
      name: "преподаватель Галина Варакина",
      link: "/galina_varakina"
    },
    {
      image: "/img/teachers/rotar_qu.jpg",
      name: "преподаватель Татьяна Ротарь",
      link: "/tatyana_rotar"
    }
  ];

  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      style={{ maxWidth: 1000, margin: "0 auto" }}
    >
      <Grid item xs={12} md={12}>
        <h2 className={classes.h2}>
          Профессиональная переподготовка по программе
          <br />
          «Дизайн и декорирование интерьеров»
        </h2>
        <ImageText
          head="Проектно-ориентированное обучение"
          image="img/living-interior-design-and-decoration/project.jpg"
          texts={[
            <span>
              За 9 месяцев <b>вы изучите</b> ту же программу, что и студенты
              университетов в течение 4 лет! Быстрее и эффективнее, благодаря
              уникальному подходу, методу индивидуального преподавания и
              небольшим группам.
            </span>,
            <span>
              <b>В процессе обучения</b> — изучаются как самые основы, так и
              широко освещается вопрос реального создания дизайн-проектов от и
              до. Не выходя из дома. В финале — у Вас уже будет собственный
              проект от реального заказчика.
            </span>
          ]}
        />
        <ImageText
          head="Наставники"
          image="img/teachers/lamonova-q.jpg"
          texts={[
            "У вас не останется шансов не применить знания на практике. «Послушать и забыть» не получится. Наши преподаватели требовательны и внимательны к Вашим работам. И к Вашей успеваемости.",
            "Квалифицированные педагоги обучают вас всем этапам дизайна — от подбора цвета и материалов до технической и правовой стороны. Каждую дисциплину читает лектор — эксперт и практик в своей области."
          ]}
          imgOnTheLeft
          illustration
          illHead="Куратор курса Елена Ламонова"
          link="/elena-lamonova"
        />
      </Grid>
      <Grid item xs={12} md={12} style={{ padding: "40px 0" }}>
        {/* <Slider {...settings}>
          {content.map((el, i) => (
            <div key={i}>
              <img
                src={el.image}
                alt={el.name}
                title={el.name}
                style={{
                  borderRadius: "50%",
                  maxWidth: 150,
                  filter: "grayscale(100%)"
                }}
              />
            </div>
          ))}
        </Slider> */}
        <Slider />
      </Grid>
      <Grid item xs={12} md={12}>
        <div style={{ height: 12 }} />
      </Grid>
    </Grid>
  );
}

export default withStyles(wStyles)(Teachers);
