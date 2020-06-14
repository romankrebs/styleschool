import React from "react";
import { Grid } from "@material-ui/core";
import Paragraph from "../../components/p-array";

export default function Component(props) {
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
          <Paragraph
            content={[
              <span>
                Ведущая мастер-класса – Марина Синева, исполнительный директор и
                байер Бутика «Garderob», преподаватель ВШСДТ
              </span>,
              <span>Время: 19:00</span>,
              <span>
                Место:{" "}
                <a href="https://mygarderob.ru/">
                  Бутик &laquo;Garderob&raquo;
                </a>{" "}
                Ул.Малая Никитская 16/5
              </span>,
              <span>Стоимость: 2000 рублей</span>
            ]}
          />
          <div style={{ height: 48 }} />
          <a href={props.link}>
            <div
              style={{
                background: "rgb(123,143,87)",
                color: "rgb(255,255,255)",
                padding: "6px 12px",
                margin: "0 auto",
                fontSize: "0.9em",
                textAlign: "center",
                width: "fit-content",
                borderRadius: 4
              }}
            >
              забронировать
            </div>
          </a>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
          <img
            src="/img/master-classes-in-the-butique-garderob/teacher.jpg"
            alt="Марина Синева"
            style={{ maxWidth: 350 }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
