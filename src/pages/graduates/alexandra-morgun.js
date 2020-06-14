import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Header from "./header-links";

export default function Morgun() {
  return (
    <div>
      <Helmet>
        <title>Александра Моргун: Публичный профиль</title>
        <meta name="keywords" content="Александра Моргун: Публичный профиль" />
      </Helmet>
      <Top />
      <Grid
        container
        style={{ maxWidth: 1000, margin: "0 auto" }}
        justify="center"
      >
        <Grid item xs={12} md={12}>
          <div
            style={{
              background: "rgba(255,255,255,0.8)",
              width: "100%"
            }}
          >
            <Header head="Александра Моргун" />
          </div>
          <img
            src="/img/graduates/morgun1.jpg"
            alt="Александра Моргун"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={10} style={{ padding: 20 }}>
          <p style={{ textAlign: "justify" }}>
            Еще в детстве мне хотелось сделать окружающий мир немного лучше,
            красивее, гармоничнее. Многие годы в поисках себя в разных
            профессиях не увенчались успехом, но после моей первой поездки в
            Париж все кардинально изменилось. Сьемки дамы в платье Диор haute
            couture на ступеньках парижской оперы, свидетельницей которого я
            случайно оказалась, буквально перевернул мой мир. А осознание
            истинной потребности женщины: «хочу шикарно выглядеть, но не понимаю
            что мне надеть и как это выбрать» определило мою будущую профессию.
          </p>
        </Grid>
        <Grid item xs={12} md={5} style={{ padding: 20 }}>
          <img
            src="/img/graduates/morgun2.jpg"
            alt="Александра Моргун"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={5} style={{ padding: 20 }}>
          <img
            src="/img/graduates/morgun3.jpg"
            alt="Александра Моргун"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={12} style={{ background: "rgb(230,227,221)" }}>
          <Grid container justify="center">
            <Grid
              item
              xs={12}
              md={9}
              style={{ paddingTop: 24, paddingBottom: 24 }}
            >
              <p style={{ textAlign: "justify", color: "rgb(100,100,100)" }}>
                Созданием стиля для женщин я занималась задолго до того как
                пришла в ВШС, но было ощущение, что чего-то не хватает, что-то
                не то. ВШС помогла расставить все по местам, понять процессы
                создания образа очень глубоко и четко. На основе этих знаний мне
                удалось создать собственную концепцию и подход в работе со
                стилем клиента.
              </p>
              <p
                style={{
                  borderLeft: "8px rgb(144,140,131) solid",
                  fontWeight: 700,
                  color: "rgb(100,100,100)",
                  padding: 12
                }}
              >
                Сейчас ко мне обращаются десятки клиентов., которые хотят
                изменить собственный образ, а вместе с ним и жизнь.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={10} style={{ padding: 20 }}>
          <p style={{ textAlign: "justify" }}>
            В моем опыте преподавание курсов для профессиональных стилистов в
            Киеве (Modamaster Fashion School), учасие как эксперта по стилю в
            телевизионных программах, в том числе известного ток шоу Супермодель
            по-украински (3 сезон) на канале СТБ, публикации и интервью в
            известных всеукраинских изданиях (Обозреватель, For-ua, Країна,
            Единственная), авторсие тренинги и семинары по стилю, программа
            повышения квалификации для бутика женской одежды Natalie Bolgar.
            Ведение проекта «Новые лица» при поддержке European Endowment For
            Democracy в роли имиджмейкера проекта, где работала одновременно с
            16-ю будущими политиками.
          </p>
        </Grid>
        <Grid item xs={12} md={5} style={{ padding: 20 }}>
          <img
            src="/img/graduates/morgun4.jpg"
            alt="Александра Моргун"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={5} style={{ padding: 20 }}>
          <img
            src="/img/graduates/morgun5.jpg"
            alt="Александра Моргун"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
