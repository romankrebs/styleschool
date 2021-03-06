import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Paragraph from "./paragraph";
import List from "../../components/list";

export default function Info() {
  return (
    <div>
      <Helmet>
        <title>Информация для пользователей | Правила обучения</title>
        <meta name="keywords" content="ВШС: Правила обучения" />
      </Helmet>
      <Top />
      <Grid
        container
        justify="center"
        style={{
          background: "url(/img/info/fullscreen.jpg) left top/cover no-repeat"
        }}
        alignItems="flex-start"
      >
        <Grid item xs={12} md={12}>
          <div style={{ height: 100 }} />
        </Grid>
        <Grid item xs={12} md={12}>
          <h1
            style={{
              padding: 10,
              paddingLeft: 20,
              margin: 0,
              background: "rgba(255,255,255,0.8)",
              fontFamily: "Roboto",
              fontSize: "2em",
              fontWeight: 700,
              color: "rgb(80,80,80)",
              textAlign: "left",
              boxSizing: "border-box"
            }}
          >
            Информация для пользователей
            <br />
            <span style={{ color: "rgb(123,143,87)" }}>/&nbsp;</span>
            Правила обучения
          </h1>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={12} style={{ padding: "5%" }}>
          <Paragraph
            content={[
              "Настоящие Правила обучения (далее Правила) устанавливают порядок оказания НОЧУ «ЦДО «Высшая школа стилистики» (далее Школа) образовательных услуг Слушателям Школы.",
              "Главные правила:",
              <List
                arr={[
                  "в процессе занятий, особенно в процессе on-line занятий, обеспечивать тишину (отключать мобильные и др.)",
                  "уважать труд окружающих и соблюдать чистоту в помещениях, где проводятся занятия",
                  "учится активно и позитивно, ведь Вам открываются новые знания и возможности"
                ]}
              />,
              "А так же:",
              "Образовательные услуги оказываются после того, как Слушатель ознакомился с настоящими Правилами. Образовательные услуги оказываются в соответствии с методиками и стандартами Школы. Образовательные услуги оказываются как по месту нахождения Школы, так и в местах, арендуемых Школой и/или связанных с тематикой проводимых занятий, в рабочие дни, с 10 до 19 часов, либо в иное время и в ином месте, в соответствии с расписанием.",
              "Школа вправе воздержаться от оказания Слушателю образовательных услуг: при просрочке оплаты обучения; если Слушатель находится в состоянии алкогольного, токсического или наркотического опьянения, нарушает общественный порядок в помещениях, занимаемых Школой; намеревается производить фотосъемку, видео и/или аудио записи без согласия Школы. В указанных случаях Компания обязана проинформировать Клиента о причине отказа в незамедлительном оказании образовательных услуг, или согласовать иной срок их оказания.",
              "Слушатель вправе консультироваться с работниками Школы при выборе образовательных услуг и выбрать те, которые, по его мнению, ему необходимы в первоочередном порядке, в том числе менять программу обучения с соответствующей доплатой."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
