import React from "react";
import { Grid } from "@material-ui/core";
// import Button from "./psevdo-button";

export default function Price() {
  var style = {
    text: {
      fontFamily: '"Hevletica", "Roboto"',
      fontSize: "1.25em",
      color: "rgb(80,80,80)",
      textAlign: "center",
      margin: 0,
      padding: 0
    },
    head: {
      fontFamily: '"Hevletica", "Roboto"',
      fontSize: "1.75em",
      textAlign: "center",
      color: "rgb(134,158,94)",
      margin: 0,
      padding: 20
    },
    subhead: {
      fontFamily: '"Hevletica", "Roboto"',
      fontSize: "1em",
      textAlign: "center",
      color: "rgb(134,158,94)",
      margin: 0,
      padding: 0
    },
    subtext: {
      fontFamily: '"Hevletica", "Roboto"',
      fontSize: "1em",
      color: "rgb(80,80,80)",
      textAlign: "center",
      margin: 0,
      padding: 0
    }
  };

  return (
    <div>
      <Grid
        container
        justify="center"
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <Grid item xs={12} md={9}>
          <p style={style.head}>СТОИМОСТЬ И УСЛОВИЯ ОБУЧЕНИЯ</p>
          <p style={style.text}>Длительность обучения &ndash; 9 месяцев</p>
          <p style={style.text}>
            Классы два раза в неделю &ndash; вторник/четверг
          </p>
          <p style={style.text}>Длительность класса &ndash; 3 академ. часа</p>
          <p style={style.text}>&nbsp;</p>
          <p style={style.text}>
            По окончании обучения выдается диплом о проф.переподготовке
            государственного ВУЗа &ndash; РГУТИС
          </p>
          <p style={style.text}>&nbsp;</p>
          <p style={style.subhead}>Стоимость обучения &ndash; 160 000 рублей</p>
          <p style={style.subtext}>
            при единовременной оплате скидка 10% &ndash; 144 000 руб.
          </p>
          <p style={style.subtext}>
            при поэтапной оплате: 1 взнос &ndash; 25 000 руб., 2-10 взносы
            &ndash; 15 000 руб.
          </p>
          <p style={style.text}>&nbsp;</p>
          {/* <p style={style.subhead}>Раннее бронирование действует при оплате до 17 мая 2019 года</p> */}
          <p style={style.subtext}>
            при единовременной оплате скидка 20% &ndash; 128 000 руб.
          </p>
          <p style={style.subtext}>
            при поэтапной: 1 взнос &ndash; 25 000 руб., 2-9 взносы &ndash; 15
            000 руб., 10 взнос отсутствует
          </p>
          <p style={style.text}>&nbsp;</p>
          <div style={{ height: 4 }} />
        </Grid>
      </Grid>
    </div>
  );
}
