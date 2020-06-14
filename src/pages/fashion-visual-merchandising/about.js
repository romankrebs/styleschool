import React from "react";
import Grid from "@material-ui/core/Grid";
//import Slider from "react-slick";

import Slid from "../../components/slider-images";
// import Button from "../../components/button0";
import H2 from "../../components/head1";

export default function About() {
  var style = {
    fontSize: "1em",
    padding: 5,
    margin: 0,
    color: "rgb(100,100,100)"
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      style={{ padding: 20 }}
    >
      <Grid item xs={12} md={12}>
        <H2 content="Визуальный мерчендайзинг в индустрии моды" />
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 20, maxHeight: 220 }}>
        <Slid
          content={[
            { src: "/img/merchandisign/img1.jpg" },
            { src: "/img/merchandisign/img2.jpg" },
            { src: "/img/merchandisign/img3.jpg" },
            { src: "/img/merchandisign/img4.jpg" },
            { src: "/img/merchandisign/img5.jpg" },
            { src: "/img/merchandisign/img6.jpg" },
            { src: "/img/merchandisign/img7.jpg" }
          ]}
          play={3000}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <p style={style}>
          <b>Рассматриваем шаг за шагом темы по блокам:</b>
        </p>
        <p style={style}>
          <b>1 - ассортимент</b>
          , контрольные документы, стандарты, обучение персонала, аналитика и
          статистика, расчет количественных характеристик.
        </p>
        <p style={style}>
          <b>2 - витрина</b>
          , торговый зал, торговое оборудование, освещение, выкладка.
        </p>
        <p style={style}>
          <b>3 - открытие нового магазина</b>
          , техзадание и закупка оборудования, реконструкция/перезонирование
          магазина.
        </p>
        <p style={style}>
          <b>4 - визуальные (стилистические)</b>
          , коммерческие и организационные аспекты ВМ.
        </p>
        <p style={style}>
          <b>Цель:</b>
           систематизация и актуализация применяемых сегодня на практике знаний
          и технологий
        </p>
        <p style={style}>
          В рамках курса предусмотрена консультационная сессия.
        </p>
      </Grid>
    </Grid>
  );
}
