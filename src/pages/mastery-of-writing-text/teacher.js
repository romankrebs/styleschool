import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Teacher() {
  var image = {
    src: "/img/mastery-of-writing-text/teacher.jpg",
    style: {
      borderRadius: "50% 50%",
      height: 200,
      width: "auto"
    },
    label: {
      style: {
        fontSize: "1.2em",
        fontWeight: 700,
        color: "rgb(100,100,100)",
        textAlign: "center"
      },
      text: "Юлия Милович-Шералиева"
    }
  };

  var text = {
    style: {
      fontSize: "1em",
      fontWeight: 400,
      color: "rgb(100,100,100)",
      padding: 0,
      margin: 0
    },
    content: (
      <span>
        Культуролог, автор книги «Как выучить любой иностранный язык»,
        переведенной на китайский и японский языки; книги «Место сердца», статей
        и цикла эссе «Балканские записки», переведенного на сербский язык.
        Прозаик, редактор в СМИ, преподаватель (МГК им. Чайковского; отделения
        культурологии, журналистики, психологии, дизайна Высшей школы «Среда
        обучения»). Дипломант двух литературных премий им. Волошина, участник
        международного проекта литераторов и переводчиков «Минская инициатива».
        <br />
        <br />
        <a href="https://www.facebook.com/julia.milovicseralijeva">
          Личная страница в FB
        </a>
      </span>
    )
  };

  var head = {
    text: "Преподаватель",
    style: {
      fontSize: "2em",
      fontWeight: 700,
      color: "rgb(100,100,100)",
      textAlign: "center"
    }
  };

  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={8}>
        <h2 style={head.style}>{head.text}</h2>

        <Grid container justify="center" alignItems="flex-start">
          <Grid
            item
            xs={12}
            md={6}
            style={{ textAlign: "center", padding: 20 }}
          >
            <img src={image.src} alt="" style={image.style} />
            <p style={image.label.style}>{image.label.text}</p>
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: 20 }}>
            <p style={text.style}>{text.content}</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
