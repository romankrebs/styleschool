import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Teacher() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <p
          style={{
            textAlign: "left",
            fontSize: "1.2em",
            color: "rgb(100,100,100)"
          }}
        >
          <b>Марина Синева</b>, исполнительный директор и байер Бутика
          «Garderob», преподаватель ВШСДТ:
        </p>
      </Grid>
      <Grid item xs={12} md={6}>
        <p
          style={{
            textAlign: "left",
            color: "rgb(100,100,100)",
            fontStyle: "italic",
            lineHeight: "1.5em"
          }}
        >
          <span
            style={{
              fontSize: "2em",
              color: "rgb(80,80,80)",
              fontWeight: 700
            }}
          >
            &laquo;
          </span>
          &ensp;Начинала я свою fashion карьеру более 15 лет назад в компании
          Bosco di Ciliegio, с открытия таких бутиков как ETRO и EA. У меня
          большой опыт работы и с монобрендовыми и с мультибрендовыми
          коллекциям.
          <br />С каждым годом мой опыт работы пополняется знакомством с новыми
          марками итальянских, французских, бельгийских, канадских,
          португальских, австралийских и американских дизайнеров.
          <br />
          Мне посчастливилось не только познакомится, но и посотрудничать с
          такими именитыми дизайнерами как семья ETRO (Джироламо, Кин,
          Вероника); Rabih Kayrouz, Cedric Charlier, и даже с таким
          непревзойдённым, великим и мега талантливым дизайнером, как Джорджо
          Армани!!! &ensp;
          <span
            style={{
              fontSize: "2em",
              color: "rgb(80,80,80)",
              fontWeight: 700,
              lineHeight: "0.5em"
            }}
          >
            &raquo;
          </span>
        </p>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: 20,
          paddingTop: 0,
          textAlign: "center"
        }}
      >
        <img
          src="/img/master-classes-in-the-butique-garderob/img01.jpg"
          alt=""
          style={{ maxWidth: 350 }}
        />
      </Grid>
    </Grid>
  );
}
