import React from "react";
import { useStyles, colors } from "./styles";

const content = [
  "Понятие стиля, как системы",
  "Стилизация,как основной инструмент творчества",
  "Специальная колористика для визажистов",
  "Способы цветового анализа внешности",
  "Способы цветового коннекта внешности,костюма и майка",
  "Основные группы современных стилей",
  "Стилевая доминанта внешности. Изучение основных стилевых типажей.",
  "Прически и макияж для каждого стилевого типажа.",
  "Источники вдохновения для стилистов, визажистов, парикмахеров. Референсы. Метод ассоциаций.",
  "Fashion-trends следующего сезона и способы их использования в практике создания стильного образа."
];

const Programma = () => {
  const classes = useStyles();
  return (
    <div style={{ padding: 48 }}>
      <h2 className={classes.h2} style={{ color: colors.indigo }}>
        Программа курса
      </h2>
      {content.map((el, i) => (
        <div
          className={(i + 1) % 2 ? classes.tableDark : classes.tableLight}
          style={i === 0 ? { borderTop: "1px solid " + colors.border } : null}
        >
          {i + 1}
          .&emsp;
          {el}
        </div>
      ))}
    </div>
  );
};

export default Programma;
