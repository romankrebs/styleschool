import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Descript() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12} style={{ padding: "0 20px" }}>
        <p
          style={{
            fontSize: "1em",
            color: "rgb(80,80,80)",
            margin: 0,
            padding: "0 30px 20px 30px"
          }}
        >
          В рамках курса также будут рассмотрены вопросы связи профессии
          визуального мерчандайзера с профессиями стилиста, имиджмейкера,
          дизайнера fashion retail, актуальность этих профессий в Fashion
          retail, профессиональные требования работодателей, уровень дохода.
          Определены сферы применения полученных знаний и практических навыков и
          перспективы построения карьеры в сфере fashion retail. Дан глоссарий:
          основные определения и понятия, общепринятые термины в мерчандайзинге.
          Представлены примеры выполненных работ в Fashion retail: витрины,
          торговое оборудование, торговый зал, выкладка ассортимента,
          зонирование, декорирование.
        </p>
      </Grid>
    </Grid>
  );
}
