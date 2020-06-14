import React from "react";
import Helmet from "react-helmet";
import { Grid } from "@material-ui/core";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Socnet from "../../components/want-to-know";
// import Socnet from "../../components/socnets-icons-buttons";
import { HorizontalForm } from "../../components/forms";

export default function Order() {
  return (
    <div>
      <Helmet>
        <title>Запись на обучение</title>
        <meta name="keywords" content="ВШС: Запись на обучение" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Запись на обучение" />
        <Grid container alignItems="flex-start" spacing={3}>
          <Grid item xs={12} md={12}>
            <h1
              style={{
                fontSize: "2em",
                fontWeight: 700,
                color: "rgb(80,80,80)",
                textAlign: "center"
              }}
            >
              Оставьте заявку на обучение
            </h1>
          </Grid>
          <Grid item xs={12} md={12}>
            <HorizontalForm target="send_form_order_page" />
          </Grid>
          <Grid item xs={12} md={12}>
            {/* <Socnet link="order" /> */}
            <Socnet noHead />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
