import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";

import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Card from "../../components/card";

export default function Articles(params) {
  var content = [
    {
      image: "/img/articles/8558.jpg",
      descript: "Понедельник, 29 Январь 2018, 19:43",
      head: "Кутюрье мечты",
      link: "/blog/kuturye-mechty"
    },
    {
      image: "/img/articles/132.jpg",
      descript: "Вторник, 30 Май 2017, 19:20",
      head: "Платье, которое идет всем.",
      link: "/blog/platye-kotoroe-idet-vsem"
    },
    {
      image: "/img/articles/130.jpg",
      descript: "Вторник, 30 Май 2017, 17:09",
      head: "Два сапога – ПАРА, или пресловутый family look.",
      link: "/blog/dva-sapoga-para-ili-preslovutyj-family-look"
    },
    {
      image: "/img/articles/126.jpg",
      descript: "Понедельник, 13 Февраль 2017, 11:25",
      head: "Детская мода: вчера и сегодня",
      link: "/blog/detskaya-moda-vchera-i-segodnya"
    },
    {
      image: "/img/articles/125.jpg",
      descript: "Четверг, 22 Декабрь 2016, 12:30",
      head: "Ирония судьбы – или еще одна статья о новогодних нарядах",
      link: "/blog/ironiya-sudby-ili-esche-odna-statiya-o-novogodnih-naryadah"
    },
    {
      image: "/img/articles/123.jpg",
      descript: "Вторник, 15 Ноябрь 2016, 13:21",
      head: "Мода в мешке",
      link: "/blog/moda-v-meshke"
    },
    {
      image: "/img/articles/122.jpg",
      descript: "Вторник, 25 Октябрь 2016, 11:16",
      head: "Ты мне это… брошь!",
      link: "/blog/ty-mne-eto-broshj"
    },
    {
      image: "/img/articles/121.jpg",
      descript: "Вторник, 4 Октябрь 2016, 10:32",
      head: "Смерть ей к лицу",
      link: "/blog/smertj-ey-k-litsu"
    },
    {
      image: "/img/articles/120.jpg",
      descript: "Понедельник, 26 Сентябрь 2016, 12:00",
      head: "Мода на время",
      link: "/blog/moda-na-vremya"
    },
    {
      image: "/img/articles/119.jpg",
      descript: "Понедельник, 19 Сентябрь 2016, 10:55",
      head: "Зверски красива!",
      link: "/blog/zverski-krasiva"
    },
    {
      image: "/img/articles/118.jpg",
      descript: "Вторник, 6 Сентябрь 2016, 15:15",
      head: "Канотье: соломенная шляпка с богатой историей",
      link: "/blog/kanotje-solomennaya-shlyapka-s-bogatoj-istoriej"
    },
    {
      image: "/img/articles/115.jpg",
      descript: "Четверг, 1 Сентябрь 2016, 14:19",
      head: "Кушать подано… на подиум",
      link: "/blog/kushatj-podano-na-podium"
    },
    {
      image: "/img/articles/111.jpg",
      descript: "Четверг, 14 Июль 2016, 13:29",
      head: "Индивидуальный стиль. Творчество или необходимость?",
      link: "/blog/individualnyj-stilj-tvorchestvo-ili-neobhodimostj"
    },
    {
      image: "/img/articles/39.jpg",
      descript: "Воскресенье, 4 Октябрь 2015, 15:58",
      head: "Анализ коллекции Maison Margiela",
      link: "/blog/analiz-kollektsii-maison-margiela"
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Статьи</title>
        <meta name="keywords" content="ВШС: Статьи" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Grid container justify="center" alignItems="flex-start">
          <Grid
            item
            xs={12}
            md={12}
            style={{ padding: "5px 20px", background: "rgba(255,255,255,0.8)" }}
          >
            <Top faqultet="Статьи" />
          </Grid>
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <h1
              style={{
                fontFamily: "Roboto",
                fontSize: "1.6em",
                fontWeight: 700,
                padding: 0,
                margin: 0,
                textAlign: "left",
                color: "rgb(100,100,100)"
              }}
            >
              Статьи
            </h1>
          </Grid>
          <Grid item xs={12} md={12} style={{ padding: "8px 20px" }}>
            <Grid
              container
              justify="center"
              alignItems="flex-start"
              spacing={1}
              style={{ padding: 20 }}
            >
              {content.map((el, i) => (
                <Grid item xs={12} sm={6} md={3} lg={2}>
                  <Card
                    image={el.image}
                    descript={el.descript}
                    head={el.head}
                    link={el.link}
                    key={i}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
