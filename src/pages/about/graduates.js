import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import H2 from "../../components/head1";
import Slider from "../../components/slider-person";
import { graduates } from "../graduates/index";

export default function Graduates() {
  return (
    <Grid
      container
      justify="center"
      style={{ background: "rgba(242,240,230,1)" }}
    >
      <Grid item xs={12} md={12}>
        <H2 content="Выпускники" />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        style={{
          padding: "20px 28px 30px",
          background: "rgba(242,240,230,1)"
        }}
      >
        <Slider teachers={graduates} style={{}} noLink />
      </Grid>
      <Grid item>
        <Link to="/graduates">
          <p
            style={{
              background: "rgb(123,143,87)",
              boxSizing: "border-box",
              height: 42,
              width: 200,
              color: "rgb(255,255,255)",
              // fontFamily: "Roboto",
              fontSize: 18,
              borderRadius: 4,
              margin: "20 auto",
              textAlign: "center",
              paddingTop: 6
            }}
          >
            Все Выпускники
          </p>
        </Link>
      </Grid>
    </Grid>
  );
}
