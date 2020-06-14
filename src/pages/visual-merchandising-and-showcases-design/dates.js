import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Buttons from "../../components/buttons";
import H2 from "../../components/head1";
import { dates, DateToString } from "../shedule/dates";

export default function Dates() {
  var content = {
      head: "Ближайшие даты",
      forma: "Дистанционно",
      date: DateToString(dates.visualMerchandising),
      image: "/img/green/clock.svg",
      duration: "Длительность: 6 месяцев"
    },
    styles = {
      title: {
        // fontFamily: "Roboto",
        fontSize: "1.5em",
        textAlign: "center",
        color: "rgb(80,80,80)"
      },
      date: {
        // fontFamily: "Roboto",
        fontSize: "1.1em",
        textAlign: "center",
        color: "rgb(100,100,100)"
      },
      duration: {
        // fontFamily: "Roboto",
        fontSize: "1em",
        textAlign: "center",
        color: "rgb(100,100,100)"
      },
      price: {
        fontSize: "1.6em",
        textAlign: "center",
        color: "rgb(100,100,100)",
        fontWeight: 600
      }
    };

  return (
    <Grid container justify="center" alignItems="center" spacing={3}>
      <Grid item xs={12} md={12}>
        <H2 content={content.head} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: 10 }}>
          <p style={styles.title}>{content.forma}</p>
          <p
            style={{
              background: "rgba(240,240,240,1)",
              ...styles.date
            }}
          >
            {content.date}
          </p>
          <p style={styles.duration}>
            <img
              src={content.image}
              alt=""
              style={{
                height: 16,
                margin: 0,
                marginBottom: -2
              }}
            />
            {"  "}
            {content.duration}
          </p>
          <Buttons
            link="https://billing.styleschool.ru/event/LXqSp7kuTQaEernum"
            credit
            sum="89000.00"
            name="Визуальный мерчендайзинг и витринистика"
            test={false}
            yellow={true}
          />
        </Paper>
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <Paper style={{ padding: 10 }}>
          <p style={styles.title}>Стоимость</p>
          <p style={styles.price}>
            89
            <sup>000</sup> &#8381;
          </p>
        </Paper>
      </Grid> */}
    </Grid>
  );
}
