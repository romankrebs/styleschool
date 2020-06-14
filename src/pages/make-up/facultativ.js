import React from "react";
import List from "../../components/list";

let styles = {
  h2: {
    font: '500 2em "Lora"',
    textAlign: "left",
    color: "rgb(100,100,100)",
    margin: 0,
    padding: "24px 0 12px 12px",
  },
  title: {
    font: '600 1em "Roboto"',
    textAlign: "left",
    color: "rgb(100,100,100)",
    margin: 0,
    padding: "0 0 12px 12px",
  },
  list: {
    font: '400 1em "Roboto"',
    textAlign: "left",
    color: "rgb(100,100,100)",
  },
  box: {
    width: "100%",
    border: "5px dashed rgb(232,232,232)",
    padding: 12,
    boxSizing: "border-box"
  },
};

export default function Facultativ() {
  return(
    <div style={styles.box}>
      <h2 style={styles.h2}>Факультатив</h2>
      <h4 style={styles.title}>Базовый курс по имиджелогии</h4>
      <List
        arr={[
          "Колористика и подбор базового гардероба",
          "Типы фигур и принципы визуальной коррекции",
          "Основные стили в одежде: их соответствие внешности, характеру, ситуации",
          "Правила подбора аксессуаров",
          "Актуальные идеи сочетания одежды для карьеры, личной жизни и отдыха"
        ]}
        style={styles.list}
      />
    </div>
  );
}