import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
// import Button from "./psevdo-button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Teachers() {
  var settings = {
    infinite: true,
    centerPadding: "50px",
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
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
      image:
        "/img/living-interior-design-and-decoration/prepodavatel-darjya-uhlinova.jpg",
      name: "преподаватель Дарья Ухлинова",
      link: ""
    },
    {
      image:
        "/img/living-interior-design-and-decoration/prepodavatel-iljya-soroka.jpg",
      name: "преподаватель Илья Сорока",
      link: ""
    },
    {
      image:
        "/img/living-interior-design-and-decoration/prepodavatel-galina-varakina.jpg",
      name: "преподаватель Галина Варакина",
      link: "/galina_varakina"
    },
    {
      image:
        "/img/living-interior-design-and-decoration/prepodavatel-evgeniya-petrova.jpg",
      name: "преподаватель Евгения Петрова",
      link: ""
    },
    {
      image:
        "/img/living-interior-design-and-decoration/prepodavatel-marina-kostarnova.jpg",
      name: "преодаватель Марина Костарнова",
      link: "/marina_kostarnova"
    },
    {
      image:
        "/img/living-interior-design-and-decoration/prepodavatel-alina-ermolaeva.jpg",
      name: "преподаватель Алина Ермолаева",
      link: ""
    },
    {
      image:
        "/img/living-interior-design-and-decoration/prepodavatel-oljga-olyushina.jpg",
      name: "преподаватель Ольга Олюшина",
      link: "https://styleschool.ru/user/profile.php?id=15477"
    }
  ];

  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      style={{ maxWidth: 1000, margin: "0 auto" }}
    >
      <Grid item xs={12} md={9}>
        <p style={style.head}>ЛЕКТОРЫ И ЭКСПЕРТЫ</p>
        <p style={style.text}>
          Преподавание построено таким образом, что каждую дисциплину читает
          лектор &ndash; эксперт и практик в одной области.
        </p>
        <p style={style.text}>
          В период обучения у слушателя есть возможность познакомиться и
          перенять опыт у тех, кто является на данный момент лидерами мнения
          в&nbsp;сфере бизнеса по&nbsp;дизайну интерьера.
        </p>
      </Grid>
      <Grid item xs={12} md={9} style={{ padding: "40px 0" }}>
        <Slider {...settings}>
          {content.map((el, i) => (
            <div key={i}>
              {/* <a href={el.link}> */}
              <img
                src={el.image}
                alt={el.name}
                style={{ borderRadius: "50%", maxWidth: 120 }}
              />
              {/* </a> */}
            </div>
          ))}
        </Slider>
      </Grid>
      <Grid item xs={12} md={12}>
        <div style={{ height: 12 }} />
      </Grid>
    </Grid>
  );
}
