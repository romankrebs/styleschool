import React from "react";
import Grid from "@material-ui/core/Grid";

// import Button from "../../components/button0";
import H2 from "../../components/head1";

export default function Price() {
  return (
    <Grid container justify="center" style={{ padding: 20 }}>
      <Grid item xs={12} md={6}>
        <H2 content="Стоимость и условия оплаты" />
        <p
          style={{
            fontSize: "3.5em",
            fontWeight: 700,
            textAlign: "center",
            color: "rgb(123,143,87)",
            margin: 0,
            padding: 10
          }}
        >
          9 500₽
        </p>
        <p
          style={{
            fontSize: "1em",
            fontWeight: 400,
            textAlign: "center",
            color: "rgb(100,100,100)",
            margin: 0,
            padding: 5,
            fontFamily: "Futura-Normal"
          }}
        >
          <img
            src="/img/green/brightness-percent.svg"
            alt=""
            style={{ width: 24, marginBottom: -6 }}
          />
          &nbsp;&nbsp; Возможна рассрочка
        </p>
      </Grid>
    </Grid>
  );
}
