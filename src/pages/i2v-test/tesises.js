import React from "react";
import { Grid } from "@material-ui/core";
import List from "../../components/list";

let styles = {
  head: {
    font: "600 1.1em",
    color: "rgb(100,0,0)",
    textAlign: "left",
    margin: 0,
    padding: 12
  },
  text: {
    font: "400 1em",
    color: "rgb(100,100,100)",
    textAlign: "left",
    margin: 0,
    padding: 8,
    listStyle: "none"
  }
};

export default function Tesises() {
  return (
    <div>
      <Grid container justify="center" alignItems="flex-start" spacing={3}>
        <Grid item xs={12} md={6}>
          <h3 style={styles.head}>Для кого</h3>
          <List
            arr={[
              "без опыта или базовый уровень в профессии",
              "специалисты смежных индустрий"
            ]}
            style={styles.text}
          />
          <h3 style={styles.head}>Уровень образования</h3>
          <List
            arr={[
              "специалисты с высшим или средним профессиональным образованием",
              "допускается: студенты"
            ]}
            style={styles.text}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h3 style={styles.head}>Возможности</h3>
          <List
            arr={[
              "Имидж-консультирование клиентов, шопинг в России и Европе",
              "Стилизация фотосъемок (реклама, глянец), участие в ТВ проектах",
              "Коллаборации с дизайнерами (стилизация коллекций)",
              "Сотрудничество с бутиками и сетевыми магазинами",
              "Личный бренд, блог, networkihg и продвижение",
              "Свой бизнес в индустрии моды"
            ]}
            style={styles.text}
          />
        </Grid>
      </Grid>
    </div>
  );
}
