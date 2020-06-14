import React from "react";
import { Grid } from "@material-ui/core";

export default function Studying() {
  return (
    <div>
      <Grid container alignItems="flex-start" spacing={4}>
        <Grid item xs={12} md={12}>
          <h2
            style={{
              fontFamily: "Roboto",
              fontSize: "2em",
              fontWeight: 700,
              textAlign: "center",
              color: "rgb(100,100,100)",
              padding: "30px 0",
              margin: 0
            }}
          >
            Журналистика в индустрии моды: изучаем
          </h2>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src="/img/profi-fashion-journalist/glyanec.png"
              alt=""
              style={{ height: 100 }}
            />
            <p
              style={{
                // fontFamily: "Roboto",
                fontSize: "1em",
                fontWeight: 400,
                textAlign: "center",
                color: "rgb(100,100,100)",
                padding: "10px 0",
                margin: 0
              }}
            >
              Специфика работы для «глянца»
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src="/img/profi-fashion-journalist/blog.png"
              alt=""
              style={{ height: 100 }}
            />
            <p
              style={{
                // fontFamily: "Roboto",
                fontSize: "1em",
                fontWeight: 400,
                textAlign: "center",
                color: "rgb(100,100,100)",
                padding: "10px 0",
                margin: 0
              }}
            >
              Специфика фэшн-блоггинга
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src="/img/profi-fashion-journalist/copy.png"
              alt=""
              style={{ height: 100 }}
            />
            <p
              style={{
                // fontFamily: "Roboto",
                fontSize: "1em",
                fontWeight: 400,
                textAlign: "center",
                color: "rgb(100,100,100)",
                padding: "10px 0",
                margin: 0
              }}
            >
              Специфика копирайта «под клиента»
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
