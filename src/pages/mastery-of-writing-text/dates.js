import React from "react";
import Grid from "@material-ui/core/Grid";
import Marker from "../../components/marker-paper";

export const datas = {
  online: []
};

export default function Dates() {
  return datas.online[0] ? (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={7}>
        <h2
          style={{ fontFamily: "Roboto", fontSize: "2em", textAlign: "center" }}
        >
          Ближайший набор
        </h2>
      </Grid>
      <Grid xs={12} md={7}>
        <Marker
          head={{
            content: "Online",
            style: {}
          }}
          text={{
            content: "",
            style: {}
          }}
          marker={{
            content: datas.online[0],
            style: { background: "rgba(240,240,240,1)", textAlign: "center" }
          }}
          block={{
            style: { padding: 10 }
          }}
          button={{
            message: "Узнать подробнее"
          }}
        />
      </Grid>
    </Grid>
  ) : null;
}
