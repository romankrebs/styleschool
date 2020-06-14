import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import H2 from "../../components/head1";
import H3 from "../../components/head3";

function Block(props) {
  return (
    <Paper style={{ padding: 10 }}>
      <div style={{ textAlign: "center", paddingTop: 20 }}>
        <img
          src={props.image}
          alt=""
          style={{ height: 60, width: "auto", ...props.styleImage }}
        />
      </div>
      <H3 content={props.head} style={{ ...props.styleHead }} />
      <p
        style={{
          fontFamily: "Roboto",
          fontSize: "1em",
          color: "rgb(100,100,100)",
          textAlign: "center",
          ...props.styleText
        }}
      >
        {props.text}
      </p>
    </Paper>
  );
}

export default function Why() {
  return (
    <Grid container justify="center" alignItems="stretch" spacing={2}>
      <Grid item xs={12} md={12}>
        <H2 content="Почему стоит учиться у нас" />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 10 }}>
        <Block
          image="/img/living-interior-design-and-decoration/price.svg"
          head="Цена успеха"
          text="Обучение от 9900₽/мес*, варианты оплаты: со скидкой, рассрочка"
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 10 }}>
        <Block
          image="/img/living-interior-design-and-decoration/form.svg"
          head="Формы обучения"
          text="Очное и дистанционное, возможность обучаться из любой точки мира"
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 10 }}>
        <Block
          image="/img/living-interior-design-and-decoration/schedule.svg"
          head="Удобный график"
          text="Пропущенные занятия можно посмотреть в записи или посетить с другой группой"
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 10 }}>
        <Block
          image="/img/living-interior-design-and-decoration/grow.svg"
          head="Личностный рост"
          text="Актуальные технологии и продающие решения для выстраивания карьеры и бизнеса"
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 10 }}>
        <Block
          image="/img/living-interior-design-and-decoration/theory.svg"
          head="Практика и теория"
          text="Эффективное совмещение профессиональной деятельности с обучением"
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 10 }}>
        <Block
          image="/img/living-interior-design-and-decoration/diploma.svg"
          head="Диплом гос.университета"
          text="Программа составлена дизайнерами-практиками и ведущими преподавателями ВУЗов"
        />
      </Grid>
    </Grid>
  );
}
