import React from "react";
import Cot from "../../components/cot";
import List from "../../components/list";

let styles = {
    head: {
      fontSize: "1.2em",
      fontFamily: "Lora",
      fontWeight: 600,
      margin: 0,
      padding: 12,
      textAlign: "center",
      color: "rgb(100,100,100)"
    },
    comment: {
      fontSize: "0.9em",
      color: "rgb(120,120,120)"
    },
    text: {
      color: "rgb(100,100,100)"
    },
    plus: {
      fontSize: "1.2em"
    }
  },
  content = {
    online: {
      textButton: "Стоимость обучения, дистанционное отделение",
      text: (
        <React.Fragment>
          <h3 style={styles.head}>Базовая стоимость дистанционного обучения</h3>
          <List
            style={styles.text}
            arr={[
              <span>
                Полная стоимость обучения &mdash; 160
                <sup>000</sup> рублей
              </span>,
              <span>
                При единовременной оплате скидка 10% &mdash; 144
                <sup>000</sup> рублей
              </span>,
              <span>
                При рассрочке на 10 месяцев график оплат: 1-й взнос — 25
                <sup>000</sup> рублей,
                <br />
                2-10 взносы &mdash; 15
                <sup>000</sup> руб.
              </span>
            ]}
          />
          <p style={styles.comment}>
            * Приведена стоимость дистанционного обучения на полном курсе по
            программе «Дизайн и декорирование интерьеров». Стоимость обучения на
            курсах по специализации смотрите отдельно
          </p>
        </React.Fragment>
      )
    },
    ofline: {
      textButton: "Стоимость обучения на очном отделении",
      text: (
        <React.Fragment>
          <h3 style={styles.head}>Базовая стоимость очного обучения</h3>
          <List
            arr={[
              <span>
                Полная стоимость обучения &mdash; 200
                <sup>000</sup> рублей
              </span>,
              <span>
                При единовременной оплате скидка 10% &mdash; 180
                <sup>000</sup> рублей
              </span>,
              <span>
                При рассрочке на 10 месяцев график оплат: 20
                <sup>000</sup> рублей в месяц
              </span>
            ]}
            style={styles.text}
          />
          <p style={styles.comment}>
            * Приведена стоимость очного обучения на полном курсе по программе
            «Дизайн и декорирование интерьеров». Стоимость обучения на курсах по
            специализации смотрите отдельно
          </p>
        </React.Fragment>
      )
    }
  };

export default function SystemPay() {
  return (
    <div>
      <Cot textButton={content.ofline.textButton} text={content.ofline.text} />
      <Cot textButton={content.online.textButton} text={content.online.text} />
      <div style={{ height: 64 }} />
    </div>
  );
}
