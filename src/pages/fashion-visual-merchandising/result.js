import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";
import List from "../../components/list";

export default function Result() {
  var style = {
    fontSize: "1em",
    color: "rgb(100,100,100)"
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ padding: 20 }}
    >
      <Grid item xs={12} md={12}>
        <H2 content="Результаты обучения" />
      </Grid>
      <Grid item xs={12} md={11}>
        <p style={style}>По итогам прохождения курса слушатели смогут:</p>
        <List
          arr={[
            "оценить свою стоимость на рынке труда, вести переговоры с использованием профессионального сленга",
            "разрабатывать нормативные документы, готовить учебные программы",
            "готовить технические задания, смемы и вести авторский надзор",
            "вести переговоры с поставщиками, управлять ценами на ассортимент и остатками",
            "формировать внутреннее пространство магазина, осуществлять выкладку, развеску",
            "работать с освещением в торговом зале, оформлять и декорировать витрину",
            "формировать отчеты, оценивать эффективность проектов"
          ]}
          style={style}
        />
      </Grid>
    </Grid>
  );
}
