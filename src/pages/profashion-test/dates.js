import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Forma from "../../components/credit-form";

const useStyles = makeStyles({
  submit: {
    background: "rgba(123,143,87,0.1)",
    color: "rgb(123,143,87)",
    border: "1px solid rgb(123,143,87)",
    textAlign: "center",
    borderRadius: 4,
    padding: 8,
    cursor: "pointer",
    transition: "1s background, 1s color",
    "&:hover": {
      background: "rgba(123,143,87,0.9)",
      color: "rgb(255,255,255)"
    }
  }
});

const styles = {
  h3: {
    fontFamily: "Lora",
    fontSize: "1.6em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontWeight: 500,
    margin: 0,
    padding: "12px 0"
  },
  h2: {
    fontFamily: "Lora",
    fontSize: "1.8em",
    color: "rgb(80,80,80)",
    textAlign: "center",
    fontWeight: 500,
    margin: 8,
    padding: "12px 0",
    paddingTop: 32
  }
};

const Button = props => {
  return (
    <div style={{ textAlign: "center" }}>
      <a href="https://billing.styleschool.ru/event/wJrgKJ8KC5QnEPgm3">
        <div
          style={{
            background: "rgb(123,143,87)",
            color: "rgb(255,255,255)",
            fontSize: "1em",
            textAlign: "center",
            padding: 8,
            borderRadius: 4,
            maxWidth: 200,
            margin: "10px auto"
          }}
        >
          Забронировать
        </div>
      </a>
      <Forma sum={props.sum} name={props.name} test={false} />
    </div>
  );
};

const Tile = props => {
  return (
    <Paper
      style={{
        padding: 10
      }}
    >
      <h3 style={styles.h3}>{props.head}</h3>
      <p
        style={{
          background: "rgb(240,240,240)",
          fontSzie: "1em",
          textAlign: "center"
        }}
      >
        {props.date}
      </p>
      <p
        style={{
          fontSize: "0.9em",
          textAlign: "center"
        }}
      >
        {props.price}
      </p>
      <Button sum={props.sum} name={props.name} />
    </Paper>
  );
};

export default function Dates() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <h2 style={styles.h2}>Ближайший набор</h2>
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 20 }}>
        <Tile
          head="Дистанционно"
          date="8 августа 2019"
          price={
            <span>
              Записаться на собеседование
              <br />
              Получить доступ к демо лекциям
              <br />
              Внести аванс 2000 рублей
            </span>
          }
          sum="99000.00"
          name="Имидж-консультант, курс профессиональной переподготовки (онлайн)"
        />
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 20 }}>
        <Tile
          head="Очно"
          date="17 сентября 2019"
          price={
            <span>
              Записаться на собеседование
              <br />
              Получить доступ к демо лекциям
              <br />
              Внести аванс 2000 рублей
            </span>
          }
          sum="125000.00"
          name="Имидж-консультант, курс профессиональной переподготовки (очно)"
        />
      </Grid>
    </Grid>
  );
}
