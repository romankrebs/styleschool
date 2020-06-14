import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";
import H3 from "../../components/head2";
import List from "../../components/list";

export default function Position() {
  var styles = {
    text: {
      // fontFamily: "Roboto",
      fontSize: "1em",
      color: "rgb(100,100,100)",
      textAlign: "left",
      padding: 0,
      paddingBottom: 10,
      margin: 0
    }
  };
  var content = {
    head: "Профессиональная позиция",
    image: "/img/vitrinism/diplom.jpg",
    text: (
      <div>
        <p style={styles.text}>
          Подготовка специалистов в области визуального мерчендайзинга ведется с
          учетом всех основных знаний и практических навыков профессии: история
          развития моды и анализ трендов, мужская и женская стилистика,
          символика цвета и специфика оформления витрин, система грамотного
          баинга и технологии мерчендайзинга в разных ценовых сегментах и разных
          направлений fashion индустрии и др.
        </p>
        <p style={styles.text}>
          Вы получите уникальную профессию, сочетающую творческие идеи с
          анализом и логикой, общие базовые технологии со спецификой разных
          направлений индустрии модных товаров: одежда, обувь и аксессуары,
          ювелирные изделия, товары для дома. Программа курса мерчендайзинга,
          витринистики включает в себя лекционные и практические занятия.
        </p>
        <p style={{ ...styles.text, fontWeight: 700 }}>
          По итогам обучения выдается Диплом Российского государственного
          университета туризма и сервиса (РГУТИС) о профессиональной
          переподготовке по программе «Визуальный мерчендайзинг и витринистика».
        </p>
      </div>
    ),
    subtitle:
      "Изучив курс мерчендайзинга, Вы освоите востребованную и интересную профессию в области продвижения разных категорий модных товаров.",
    title1: <b>Для карьеры:</b>,
    title2: <b>Для бизнеса:</b>,
    list1: (
      <List
        arr={[
          "Практика и уникальный опыт",
          "Стажировка по специальности в известных fashion-компаниях",
          "Трудоустройство и возможности профессионального роста"
        ]}
      />
    ),
    list2: (
      <List
        arr={[
          "Европейские технологии, адаптированные для российского рынка",
          "Подготовка квалифицированного персонала",
          "Увеличение основных KPI магазинов, увеличение объема продаж"
        ]}
      />
    ),
    comment: (
      <b>
        Подробнее о приеме на обучение Вы можете узнать, обратившись через форму
        "Заявки" или сделав звонок.
      </b>
    )
  };

  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <H2 content={content.head} />
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 10 }}>
        {content.text}
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 10, paddingTop: 30 }}>
        <img src={content.image} alt="" style={{ maxWidth: "40vw" }} />
      </Grid>
      <Grid item xs={12} md={12} style={{ padding: 10 }}>
        <H3
          content={content.subtitle}
          style={{ textAlign: "left", fontFamily: "Futura-Normal" }}
        />
        <p style={styles.text}>{content.title1}</p>
        {content.list1}
        <p style={styles.text}>{content.title2}</p>
        {content.list2}
        <p style={styles.text}>{content.comment}</p>
      </Grid>
    </Grid>
  );
}
