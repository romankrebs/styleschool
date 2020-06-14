import React from "react";
import Grid from "@material-ui/core/Grid";
import Footer from "../../components/footer";
import Header from "./header";
import Dates from "./dates";
import ForWhom from "./for";
import Why from "./why";
import Theachers from "./teachers";
import Programma from "./programma";
import Descript from "./descript";
import Forma from "../../components/forma";
import Banners from "./banners";

export default function () {
  return (
    <div>
      <Header />
      <Grid container justify="center" alignItems="center" >
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <Dates />
          <ForWhom />
          <Why />
          <Theachers />
          <Programma />
          <Descript />
          <Forma />
          <Banners />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
