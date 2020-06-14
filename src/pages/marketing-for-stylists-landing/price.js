import React from "react";
import { fontNames, colors } from "./styles";
import ScrollableAnchor from "react-scrollable-anchor";
import List from "../../components/list";

const Price = () => {
  return (
    <div
      style={{
        background: colors.middle2,
        padding: 24,
        color: "rgb(250,210,60)",
        fontSize: "2em",
        lineHeight: "2em"
      }}
    >
      <ScrollableAnchor id="price">
        <h2
          style={{
            color: "rgb(250,210,60)",
            fontSize: "1.5em",
            fontFamily: fontNames.futuristic,
            fontWeight: 600,
            textAlign: "center",
            padding: "32px 0",
            margin: 0
          }}
        >
          Даты и цены
        </h2>
      </ScrollableAnchor>
      <List
        arr={[
          "Дата старта: ХХ.ХХ.2019",
          "Полная стоимость — ХХХХХ рублей",
          "Стоимость в рассрочку — от ХХХХХ рублей",
          "Цена при раннем бронировании — ХХХХХХХ рублей"
        ]}
        num="none"
      />
    </div>
  );
};

export default Price;
