import React from "react";
import { styles } from "./styles";
import List from "../../components/list";

const Digitals = () => {
  return (
    <div style={styles.digitals}>
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

export default Digitals;
