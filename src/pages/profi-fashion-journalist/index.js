import React from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Head from "./header";
import Studying from "./studying";
import Vario from "./vario";
import Programm from "./programm";
import Descript from "./descript-programm";
import Quo from "./quo";
import Conditions from "./conditions";
import Price from "./price";
import Dates from "./dates";
import Forma from "./forma";
import Banners from "./banners";

export default function Journalist() {
  return (
    <div>
      <Helmet>
        <title>Модная журналистика. Профподготовка</title>
        <meta name="keywords" content="ВШС: Модная журналистика." />
        <meta name="title" content="Курсы журналистики в индустрии моды" />
        <meta
          name="keywords"
          content="Обучение модной журналистики. Профессиональные курсы. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
        />
        <meta
          name="description"
          content="Обучение модной журналистики. Профессиональные курсы. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
        />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Архив" />
        <Grid container alignItems="flex-start" justify="center">
          <Grid item xs={12} md={12}>
            <Head />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="flex-start"
          justify="center"
          spacing={3}
          style={{
            padding: 20
          }}
        >
          <Grid item xs={12} md={12}>
            <Studying />
            <Vario />
            <Programm />
            <Descript />
            <Quo />
            <Conditions />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={12}>
            <Price />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="flex-start"
          justify="center"
          spacing={3}
          style={{
            padding: 20
          }}
        >
          <Grid item xs={12} md={12}>
            <Dates />
            <Forma />
            <Banners />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
