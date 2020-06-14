import React from "react";
import Grid from "@material-ui/core/Grid";
import Marker from "../../components/marker-paper";
import Message from "../../components/paper";

export default function Date() {
  return (
    <Grid
      container
      justify="center"
      alignItems="stretch"
      spacing={2}
      style={{ padding: 20, paddingTop: 30 }}
    >
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontFamily: "Roboto",
            fontSize: "2em"
          }}
        >
          Ближайший набор на курс
        </h2>
      </Grid>
      <Grid item xs={12} md={6} style={{ height: "100%" }}>
        <Marker
          head={{
            content: "Online",
            style: {
              margin: 0,
              paddingTop: 4
            }
          }}
          text={{
            content: (
              <span>
                Курс: <b>3</b> месяца, <b>22</b> занятия, <b>88</b> академ.
                часов
                <br />
                Занятия: <b>2</b> раза в неделю по <b>4</b> академ. часа
              </span>
            ),
            style: { textAlign: "center" }
          }}
          marker={{
            content: "28 сентября 2019",
            style: { textAlign: "center", background: "rgba(240,240,240,1)" }
          }}
          block={{
            style: { height: "100%", padding: 15 }
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Message
          message1={{
            text: (
              <span>
                15 000 <span style={{ fontFamily: "Roboto" }}>₽</span>
              </span>
            ),
            style: {
              margin: 0,
              padding: 24
            }
          }}
          message2={{
            text: "в месяц",
            style: {
              margin: 0,
              padding: 20
            }
          }}
          block={{
            style: { padding: 15 }
          }}
        />
      </Grid>
    </Grid>
  );
}
