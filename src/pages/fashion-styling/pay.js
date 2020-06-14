import React from "react";
import Cot from "../../components/cot";
import Forma from "../../components/credit-form";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

const wStyles = theme => styles;

const font = {
  title: "Roboto",
  subTitle: "Roboto",
  text: "Roboto"
};

const style = {
  h3: {
    fontFamily: font.subTitle,
    fontSize: "1.2em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 12,
    paddingBottom: 12,
    margin: 0
  },
  price: {
    fontFamily: font.subTitle,
    fontSize: "1.3em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontWeight: 400,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 0
  },
  text: {
    fontFamily: font.text,
    fontSize: "1em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontWeight: 400,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 0
  }
};

const content = {
  ofline: {
    textButton: "Очное отделение",
    text: (
      <div>
        <div style={style.price}>
          20
          <sup style={{ fontSize: "0.8em" }}>000</sup> рублей в месяц
        </div>
        <div style={style.text}>
          125
          <sup style={{ fontSize: "0.8em" }}>000</sup> рублей &ndash; полная
          стоимость
          <br />
          При единовременной оплате 10% скидка
          <br />
          Доступна банковская рассрочка на 10 месяцев без переплаты &ndash; 12
          <sup style={{ fontSize: "0.8em" }}>500</sup>
          рублей в месяц
        </div>
        <Forma
          sum="125000.00"
          name="Fasion-стилистика, курс профессиональной переподготовки (очно)"
          test={false}
          yellow
        />
      </div>
    )
  },
  online: {
    textButton: "Дистанционное отделение",
    text: (
      <div>
        <div style={style.price}>
          15
          <sup style={{ fontSize: "0.8em" }}>000</sup> рублей в месяц
        </div>
        <div style={style.text}>
          99
          <sup style={{ fontSize: "0.8em" }}>000</sup> рублей &ndash; полная
          стоимость
          <br />
          При единовременной оплате 10% скидка
          <br />
          Доступна банковская рассрочка на 10 месяцев без переплаты &ndash; 9
          <sup style={{ fontSize: "0.8em" }}>900</sup>
          рублей в месяц
        </div>
        <Forma
          sum="99000.00"
          name="Fasion-стилистика, курс профессиональной переподготовки (онлайн)"
          test={false}
          yellow
        />
      </div>
    )
  },
  free: {
    textButton: "Вольный Слушатель",
    text: (
      <div>
        <div style={style.price}>
          от 9<sup style={{ fontSize: "0.8em" }}>900</sup> рублей в месяц
        </div>
        <div style={style.text}>
          59
          <sup style={{ fontSize: "0.8em" }}>400</sup> рублей &ndash; полная
          стоимость
          <br />
          При единовременной оплате 10% скидка
          <br />
          Доступна банковская рассрочка на 10 месяцев без переплаты &ndash; 5
          <sup style={{ fontSize: "0.8em" }}>940</sup>
          рублей в месяц
        </div>
        <Forma
          sum="59400.00"
          name="Fasion-стилистика, курс профессиональной переподготовки (вольный слушатель)"
          test={false}
          yellow
        />
      </div>
    )
  }
};

const Price = props => {
  const { classes } = props;

  return (
    <div className={classes.box}>
      <h2 className={classes.h2}>
        Стоимость обучения очное и дистанционное отделение
      </h2>
      <Cot textButton={content.ofline.textButton} text={content.ofline.text} />
      <Cot textButton={content.online.textButton} text={content.online.text} />
      <Cot textButton={content.free.textButton} text={content.free.text} />
    </div>
  );
};

export default withStyles(wStyles)(Price);
