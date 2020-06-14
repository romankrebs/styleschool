import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Button from "./button-reserved";
// import ScrollableAnchor from "react-scrollable-anchor";

const styles = {
  h3: {
    fontFamily: "Roboto",
    fontSize: "1.6em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontWeight: 500,
    margin: 0,
    padding: "12px 0"
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "1.8em",
    color: "rgb(80,80,80)",
    textAlign: "center",
    fontWeight: 500,
    margin: 8,
    padding: "12px 0",
    paddingTop: 32
  }
};

const Tile = function(props) {
  return (
    <Paper
      style={{
        padding: 10,
        marginBottom: 10,
        marginTop: 10
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
      {props.link ? <Button link={props.link} /> : null}
    </Paper>
  );
};

export default function Dates(props) {
  return (
    <div>
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} md={12}>
          {/* <ScrollableAnchor id="dates"> */}
          <h2 style={styles.h2}>Ближайшие наборы на курс</h2>
          {/* </ScrollableAnchor> */}
        </Grid>
      </Grid>
      {/* <Hidden implementation="css" smDown> */}
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} md={6} style={{ padding: 20 }}>
          <Tile
            head="Дистанционно"
            date={props.dataOnline}
            price={
              <span>
                Записаться на собеседование
                <br />
                Получить доступ к демо лекциям
                <br />
                Внести аванс 2000 рублей
              </span>
            }
            link={props.linkOnline}
          />
        </Grid>
        {props.dataOfline ? (
          <Grid item xs={12} md={6} style={{ padding: 20 }}>
            <Tile
              head="Очно"
              date={props.dataOfline}
              price={
                <span>
                  Записаться на собеседование
                  <br />
                  Получить доступ к демо лекциям
                  <br />
                  Внести аванс 2000 рублей
                </span>
              }
              link={props.linkOfline}
            />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}
