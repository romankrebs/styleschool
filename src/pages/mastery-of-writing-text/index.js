import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Header from "./header";
import Footer from "../../components/footer";
import Targets from "./targets";
import Interes from "./interes";
import Tiles from "./tiles";
import Dates from "./dates";
import Teacher from "./teacher";
import Programma from "./programma";
import Price from "./price";
import Steps from "./steps";
import { HorizontalForm } from "../../components/forms";
import Banners from "./banners";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title>Мастерство создания текста</title>
        <meta name="keywords" content="ВШС: мастерство создания текста" />
        <meta
          name="title"
          content="Мастерство создания текста. Искусство самовыражения"
        />
        <meta
          name="keywords"
          content="На курсе Fashion визуальный мерчендайзинг вы получите необходимые теоретические знания и практические навыки, актуальные знания о моде и стилистике."
        />
        <meta
          name="description"
          content="На курсе 'Мастерство создания текста. Искусство самовыражения' Вы научитесь легко и с удовольствием подбирать тему, жанр и название тексту в любой ситуации, будь то открытие выставки, создании каталога, заполнение сайта, написание заметки в блог и другое. Выражать мысли ясно, просто, интересно, смело и по делу. Не бояться высказываться, пробовать, самовыражаться. Стройно и структурно мыслить."
        />
      </Helmet>
      <div style={{ maxWdth: 1000, margin: "0 auto" }}>
        <Top faqultet="Научиться писать" />
        <Header />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <Targets />
          </Grid>
        </Grid>
        <Interes />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <Tiles />
            <Dates />
            <Teacher />
            <Programma />
            <Price />
            <Steps />
            <HorizontalForm />
            <Banners />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
