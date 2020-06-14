import React from "react";
import { Grid } from "@material-ui/core";
import Blocks from "../../components/blocks.js";

export default function BlocksComponent() {
  const content = {
    a: {
      image: "/img/green/seal.svg",
      head: "Диплом гос. Университета",
      text: "Вы получаете диплом с правом деятельности в изученной области."
    },
    b: {
      image: "/img/green/school.svg",
      head: "Теория и практика",
      text: "Фундаментальный подход и обучение с преподавателями практиками."
    },
    c: {
      image: "/img/green/cash-100.svg",
      head: "Цена успеха",
      text: "Обучение от 9900 руб/мес*, варианты оплаты: со скидкой, рассрочка."
    },
    d: {
      image: "/img/green/file-video.svg",
      head: "Всегда в теме",
      text:
        "Пропущенные занятия можно посмотреть в записи или посетить с другой группой."
    },
    e: {
      image: "/img/green/chart-line.svg",
      head: "Личностный рост",
      text: "Актуальные модные технологии и развитие творческого мышления."
    },
    f: {
      image: "/img/green/earth.svg",
      head: "Формы обучения",
      text: "Очное и дистанционное, позволяющее обучаться из любой точки мира."
    }
  };

  return (
    <div>
      <Grid container style={{ maxWidth: 1000, margin: "o auto" }}>
        <Grid item xs={12} md={12}>
          <h2
            style={{
              fontFamily: "Roboto",
              fontSize: "1.8em",
              fontWeight: 500,
              textAlign: "center",
              color: "rgb(80,80,80)",
              margin: 0,
              padding: 24,
              paddingTop: 40
            }}
          >
            Преимущества обучения в ВШС
          </h2>
        </Grid>
      </Grid>
      <Blocks
        a={{
          image: content.a.image,
          head: content.a.head,
          text: content.a.text
        }}
        b={{
          image: content.b.image,
          head: content.b.head,
          text: content.b.text
        }}
        c={{
          image: content.c.image,
          head: content.c.head,
          text: content.c.text
        }}
        d={{
          image: content.d.image,
          head: content.d.head,
          text: content.d.text
        }}
        e={{
          image: content.e.image,
          head: content.e.head,
          text: content.e.text
        }}
        f={{
          image: content.f.image,
          head: content.f.head,
          text: content.f.text
        }}
        style={{
          text: { fontFamily: "Roboto" },
          head: { fontFamily: "Roboto" }
        }}
      />
    </div>
  );
}
