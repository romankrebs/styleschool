import React from "react";
import List from "../../components/list";
import { styles } from "./styles";

export default function Conditions(props) {
  return (
    <div>
      <h2 style={styles.h2}>Условия зачисления на курс:</h2>
      <List
        arr={[
          "Забронировать место, внести аванс 900 руб. (100% возврат в случае отказа)",
          "После бронирования места можно пройти пробные занятия",
          "Оформить документы для обучения"
        ]}
        style={styles.p}
      />
    </div>
  );
}
