import React from "react";
import { Grid, Paper } from "@material-ui/core";

let style = {
  h2: {
    fontFamily: "Roboto",
    fontSize: "2em",
    fontWeight: 700,
    textAlign: "center",
    color: "rgb(100,100,100)",
    padding: "30px 0 10px 0",
    margin: 0
  },
  h2Descript: {
    // fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 700,
    textAlign: "center",
    color: "rgb(140,140,140)",
    padding: "10px 0",
    margin: 0
  },
  greyComment: {
    // fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    textAlign: "left",
    color: "rgb(100,100,100)",
    padding: 0,
    margin: 0
  },
  text: {
    // fontFamily: "Roboto",
    fontSize: "1.2em",
    fontWeight: 400,
    textAlign: "left",
    color: "rgb(100,100,100)",
    margin: 0,
    padding: 12
  },
  programm: {
    // fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    textAlign: "center",
    color: "rgb(100,100,100)",
    margin: 0,
    padding: 0
  }
};

let content = {
  diplom: (
    <span>
      <b>Получение Диплома</b> возможно при наличии первого высшего или
      профессионального образования. Альтернатива &ndash; обучение как вольный
      слушатель.
    </span>
  ),
  oferta: (
    <span>
      <b>Оформление договора</b> и предоставление комплекта документов для
      зачисления
    </span>
  ),
  total: (
    <span>
      <b>По итогам обучения</b> Вы получаете Диплом о профессиональной
      переподготовки в области &laquo;Журналистика в индустрии моды&raquo;
    </span>
  ),
  descript:
    "Подробнее о приеме на обучение или о прохождении подготовительных курсов Вы можете узнать, обратившись через форму заявки.",
  programm: (
    <span>
      <b>Программа обучения</b> разработана специалистами НОЧУ ЦДО &laquo;Высшая
      школа стилистики&raquo; и утверждена Российским государственным социальным
      университетом в июне 2016 года.
    </span>
  ),
  head: "Условия обучения",
  descriptHead: "(для профобучения)"
};

export default function Conditions() {
  return (
    <Grid container alignItems="flex-start" spacing={3}>
      <Grid item xs={12} md={12}>
        <h2 style={style.h2}>{content.head}</h2>
        <p style={style.h2Descript}>{content.descriptHead}</p>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container alignItems="flex-start">
          <Grid item xs={1} md={1} style={{ paddingTop: 18 }}>
            <img src="/img/green/school.svg" alt="" style={{ height: 24 }} />
          </Grid>
          <Grid item xs={11} md={11}>
            <p style={style.text}>{content.diplom}</p>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-start">
          <Grid item xs={1} md={1} style={{ paddingTop: 18 }}>
            <img
              src="/img/green/file-document-edit.svg"
              alt=""
              style={{ height: 24 }}
            />
          </Grid>
          <Grid item xs={11} md={11}>
            <p style={style.text}>{content.oferta}</p>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-start">
          <Grid item xs={1} md={1} style={{ paddingTop: 18 }}>
            <img src="/img/green/seal.svg" alt="" style={{ height: 24 }} />
          </Grid>
          <Grid item xs={11} md={11}>
            <p style={style.text}>{content.total}</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="/img/profi-fashion-journalist/img6.jpg"
          alt=""
          style={{ maxWidth: "100%" }}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <div
          style={{
            borderRadius: 4,
            background: "rgb(230,230,230)",
            padding: 12
          }}
        >
          <p style={style.greyComment}>{content.descript}</p>
        </div>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper style={{ padding: 12 }}>
          <Grid container alignItems="flex-start" spacing={3}>
            <Grid
              item
              xs={1}
              md={1}
              style={{ paddingTop: 12, textAlign: "center" }}
            >
              <img src="/img/green/bank.svg" alt="" style={{ height: 24 }} />
            </Grid>
            <Grid item xs={11} md={11}>
              <p style={style.programm}>{content.programm}</p>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
