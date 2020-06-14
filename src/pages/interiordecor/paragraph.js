import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import List from "../../components/list";
import Slider from "../../components/slider-images";

export default function Component() {
  const cont = [
    {
      src: "/img/interiordecor/il01.jpg"
    },
    {
      src: "/img/interiordecor/il02.jpg"
    },
    {
      src: "/img/interiordecor/il03.jpg"
    },
    {
      src: "/img/interiordecor/il04.jpg"
    }
  ];

  const content = {
    left: (
      <div>
        <p
          style={{
            textAlign: "left",
            paddingTop: 0,
            marginTop: 0,
            lineHeight: "1.5em"
          }}
        >
          Мы учим Вас подбору стиля, материалов, мебели, декора, расстановке
          света. Погружаясь в оформление коллажей. Через знакомство с основными
          брендами.
        </p>
        <p style={{ textAlign: "left", lineHeight: "1.5em" }}>
          Мы учим пониманию всех процессов, и практического (сметы, чтение
          планировок, контроль исполнения), и творческого (идея, решения,
          визуализация).
        </p>
        <List
          arr={[
            <a href="#dates">Ближайшие даты</a>,
            <a href="#programma">Программа курса</a>,
            <a href="#price">Информация о стоимости</a>
          ]}
          num="none"
          style={{ lineHeight: "1.5em" }}
        />
      </div>
    ),
    right: <Slider content={cont} play={3000} />
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          {content.left}
        </Grid>
        <Hidden smDown>
          <Grid item md={1} />
          <Grid item xs={12} md={5} style={{ maxHeight: 300 }}>
            {content.right}
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs={12} md={5}>
            {content.right}
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
