import React from "react";
import Cot from "../../components/cot";
import List from "../../components/list";

let styles = {
    head: {
      fontSize: "1.2em",
      // fontFamily: "Lora",
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
      textButton: "Стоимость обучения",
      text: (
        <div style={{ textAlign: "left" }}>
          <List
            style={styles.text}
            arr={[
              <span>
                Полная стоимость обучения за 6 месяцев: 89
                <sup>000</sup> рублей
              </span>,
              <span>
                При единовременной оплате скидка 10% &ndash; 80
                <sup>100</sup> рублей
              </span>,
              <span>
                При поэтапной оплате: 1-й взнос &ndash; 23
                <sup>000</sup> рублей, 2-6 взносы &ndash; 13
                <sup>200</sup> руб.
              </span>
            ]}
          />
        </div>
      )
    }
  };

export default function SystemPay() {
  return (
    <div>
      <h2
        style={{
          fontWeight: 700,
          color: "rgb(100,100,100)",
          textAlign: "center",
          marginTop: 48
        }}
      >
        Стоимость обучения
      </h2>
      <Cot textButton={content.online.textButton} text={content.online.text} />
      <div style={{ height: 64 }} />
    </div>
  );
}
