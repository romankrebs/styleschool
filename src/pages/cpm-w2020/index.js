import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Paragraph from "../../components/p-array";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Helmet from "react-helmet";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  h1: {
    fontFamily: "Roboto",
    fontSize: "1.8rem",
    fontWeight: 700,
    textAlign: "center",
    margin: 0,
    padding: "1.3rem 0",
    color: "rgb(80,80,80)"
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "1.2rem",
    fontWeight: 500,
    textAlign: "left",
    margin: 0,
    padding: "1rem 0",
    color: "rgb(100,100,100)"
  },
  p: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    fontWeight: 400,
    textAlign: "left",
    margin: 0,
    padding: "0.5rem 0",
    color: "rgb(100,100,100)",
    lineHeight: "1.5rem"
  },
  contacts: {
    fontFamily: "Roboto",
    fontSize: "0.9rem",
    fontWeight: 400,
    textAlign: "center",
    margin: 0,
    padding: "0.5rem",
    color: "rgb(100,100,100)",
    lineHeight: "1.5rem"
  },
  box: {
    padding: 0
  },
  "@media (max-width: 959px)": {
    box: {
      padding: "0 10px"
    }
  }
});

const style = {
  p: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    fontWeight: 400,
    textAlign: "left",
    margin: 0,
    padding: "0.5rem 0",
    color: "rgb(100,100,100)",
    lineHeight: "1.5rem"
  },
  contacts: {
    fontFamily: "Roboto",
    fontSize: "0.9rem",
    fontWeight: 400,
    textAlign: "center",
    margin: 0,
    padding: "0.5rem",
    color: "rgb(100,100,100)",
    lineHeight: "1.5rem"
  }
};

function CpmW2020(props) {
  const { classes } = props;

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <Helmet>
        <title>
          КОЛЛАБОРАЦИЯ CPM И ВЫСШЕЙ ШКОЛЫ СТИЛИСТИКИ: ТРЕНДЫ В МОДНЫХ
          АКСЕССУАРАХ
        </title>
        <meta
          name="keywords"
          content="ВШСДТ: КОЛЛАБОРАЦИЯ CPM И ВЫСШЕЙ ШКОЛЫ СТИЛИСТИКИ: ТРЕНДЫ В МОДНЫХ АКСЕССУАРАХ"
        />
      </Helmet>
      <Top faqultet="CPM W2020" />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.box}
      >
        <Grid item xs={12} md={12}>
          <div style={{ textAlign: "center", padding: "1em" }}>
            <img
              src="/img/cpm-w2020/logo-cpm.png"
              alt="CPM W2020"
              style={{ maxWidth: 300 }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <h1 className={classes.h1}>
            КОЛЛАБОРАЦИЯ CPM И ВЫСШЕЙ ШКОЛЫ СТИЛИСТИКИ: ТРЕНДЫ В МОДНЫХ
            АКСЕССУАРАХ
          </h1>
          <h2 className={classes.h2}>
            В 34-м сезоне выставка CPM анонсирует дебютную коллаборацию с Высшей
            школой стилистики, дизайна и технологий в рамках развития разделов
            CPM Accessories & Shoes и CPM Handmade.
          </h2>
          <Paper
            style={{
              background: "rgb(255,250,250)",
              color: "rgb(80,80,80)",
              fontFamily: "Roboto",
              fontSize: "1.6em",
              fontWeight: 500,
              textAlign: "center",
              padding: "1.5em",
              margin: "2em 0"
            }}
          >
            Получить билет на CPM можно бесплатно при регистрации на сайте{" "}
            <a href="https://cpm-moscow.com">cpm&#8209;moscow.com</a>
          </Paper>
          <Paragraph
            style={style.p}
            content={[
              <span>
                Более 1300 брендов из 30 стран мира презентуют новые коллекции
                женской, мужской и детской одежды, модного белья и купальников,
                а также обуви и аксессуаров на выставке CPM — Collection
                Premiere Moscow в ЦВК «Экспоцентр» в 15 павильонах на общей
                площади свыше 50 тысяч м². Особым интересом байеров на
                протяжении многих лет пользуется раздел CPM Accessories & Shoes,
                предлагающий широкий ассортимент аксессуаров, головных уборов,
                сумок, бижутерии и украшений ручной работы, в том числе в рамках
                спецпроекта CPM Handmade.
              </span>,
              <span>
                С 24 по 26 февраля впервые на выставке пройдут консультационные
                сессии со специалистами Высшей школы стилистики, дизайна и
                технологий, посвященные теме подиумных трендов в модных
                аксессуарах на текущий сезон весна-лето 2020. Три дня
                посетителей павильона с коллекциями аксессуаров будут
                консультировать ведущие эксперты Школы — имидж-стилист и
                дизайнер Татьяна Фомина, fashion стилист Юлия Пындычук, а также
                имидж-стилист и визуальный мерчендайзер Маргарита Хлестова.
                Корнер, в котором состоятся мастер-классы и консультационные
                сессии будет расположен в выставочном зале 2<sub>3</sub>.
              </span>
            ]}
          />
          <p className={classes.p} style={{ fontStyle: "italic" }}>
            Расписание мастер-классов:
          </p>
          <Paragraph
            style={style.p}
            content={[
              "24.02–14:00 Маргарита Хлестова «Эффективная презентация эксклюзивного продукта»",
              "24.02–16:00 Юлия Пындычук «Съемка аксессуаров: стилизация, концепция, актуальные темы»",
              "25.02–13:00 Татьяна Фомина «Тренды в аксессуарах SS20. Винтаж и handmade»",
              "25.02–16:00 Юлия Пындычук «Съемка аксессуаров: стилизация, концепция, актуальные темы»",
              "26.02–13:00 Татьяна Фомина «Подбор аксессуара для клиента: стиль, эстетика и тренды»",
              "25.02–16:00 Татьяна Фомина «Тренды в аксессуарах SS20. Винтаж и handmade»",
              "Спецпроект выставки CPM Handmade представит в новом сезоне специальную подборку из 20 марок, найденных и приглашенных на выставку куратором Галиной Истоминой. В их числе — Orgalica, Импэкс, Shadis и A&S Oslo, Dollipops, Le Motif Couture, Vilalta, Madreperla, Raganella Princess, Fashionlab, La Chica Loca, Студия Натальи Зайцевой, ДжуZz, DNSK, а также дебютанты экспозиции — manista_biju, Abramkina.Shabut.Pogonina и UNU clothing.",
              "В числе постоянных участников есть несколько ярких брендов: PLAT’OKI выпускает с 2015 года инновационный продукт, объединяющий в каждой модели шапку, шарф, снуд и палантин; внешний слой изделий состоит из тонкой ветро- и влагозащитной ткани, внутренний — из утепленного синтепуха и мягкой трикотажной подкладки. Дизайнерские украшения ручной работы Annet Fantasy создаются Анной Лешковой в Екатеринбурге; дизайнер активно использует бижутерную сетку — современный материал, позволяющий придумывать новые формы и конструкции; с стекой не банально сочетаются натуральные камни, коллекции постоянно обновляются и трансформируются в соответствии с новыми сезонами и трендами.",
              "Еще одним заметным дебютом станет творческий союз трех дизайнеров — Abramkina Inna, Shabut Irina и Pogonina Marina — воплощающий единство трех творческих направлений: создание авторских головных уборов, элегантных сорочек, объединенных неповторимым декором из серебряных брошей, накладок, пуговиц и запонок.",
              "Выставка CPM — Collection Premiere Moscow пройдет в период с 24 по 27 февраля 2020 года на территории центрального выставочного комплекса «Экспоцентр» в Москве. Российские и международные производители модной одежды продемонстрируют коллекции сезона осень-зима 2020/21.",
              <span>
                Подробности:{" "}
                <a href="https://www.cpm-moscow.ru">www.cpm-moscow.ru</a> |{" "}
                <a href="https://www.cpm-moscow.com">www.cpm-moscow.com</a>
              </span>,
              <span>
                Instagram:{" "}
                <a href="https://instagram.com/cpmmoscow">@cpmmoscow</a> |
                Facebook: <a href="https://CPMMoscow">@cpmmoscow</a> | VK:{" "}
                <a href="https://vk.com/cpmmoscow">@cpmmoscow</a>
              </span>
            ]}
          />
          <div style={{ height: "1rem" }} />
          <Paragraph
            style={style.contacts}
            content={[
              <b>Елена Оберемова</b>,
              "Руководитель отдела маркетинга и связей с общественностью",
              "ООО «Мессе Дюссельдорф Москва»",
              "Тел.: +7 (495) 955-91-99, доб. 502",
              <a href="mailto:Oberemovae@messe-duesseldorf.ru">
                Oberemovae@messe-duesseldorf.ru
              </a>
            ]}
          />
          <div style={{ height: "1rem" }} />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default withStyles(styles)(CpmW2020);
