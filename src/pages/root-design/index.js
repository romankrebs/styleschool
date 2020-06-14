import React from "react";
import Helmet from "react-helmet";
import Top from "./topmenu";
import Screen1 from "./screen1";
import Footer from "./footer";
import { Grid } from "@material-ui/core";
import Button from "../../components/button-messages";

const Root = props => {
  return (
    <div
      style={{
        background:
          "linear-gradient(175deg, rgb(20,20,20) 0%, rgb(23,23,23) 35%, rgb(18,18,18) 35%, rgb(20,20,20) 100% )"
        // background: "radial-gradient(ellipse farthest-corner at 35% -100px, rgb(20,20,20) 0%, rgb(23,23,23) 35%, rgb(18,18,18) 35%, rgb(20,20,20) 100% )"
      }}
    >
      <Helmet>
        <title>ВШС: Высшая Школа Стилистики Дизайна и Технологий</title>
        <meta
          name="keywords"
          content="ВШС: Высшая Школа Стилистики Дизайна и Технологий"
        />
      </Helmet>
      <Top faqultet="socnet" colorSocnet="rgb(160,160,160)" />
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto" /* background: "rgb(30,40,20)" */
        }}
      >
        <Button />
        <Grid container>
          <Grid item xs={12} md={12}>
            <Screen1 />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
