import React from "react";
import { Grid } from "@material-ui/core";

const Text = props => {
  const style = {
    p: {
      color: "rgb(100,100,100)",
      padding: 8,
      margin: 0,
      fontFamily: "inherit",
      fontSize: "1em"
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <p style={style.p}>
            Курс «Психология стиля» задуман как эмоциональный разговор о теле и
            душе. Наши встречи мы посвятим выходу за рамки имидж технологий и
            стилеобразующих элементов, и рассмотрим эмоции как основу стильных
            трансформаций и шопинг-маршрутов. Разберемся в собственных
            стереотипах и научимся читать одежду как систему знаков и символов.
            Откажемся от чужого образа в пользу своего истинного Я.
          </p>
          <p style={style.p}>
            Проще говоря, поговорим о том, как облачая тело, мы разоблачаем
            душу.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Text;
