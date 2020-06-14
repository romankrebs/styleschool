import React from "react";
import Dates from "../../components/date-and-price";
import { dates, DateToString } from "../shedule/dates";
import { styles } from "./styles";

const DatesExport = props => {
  return (
    <div>
      <Dates
        head="Ближайший набор"
        title="Дистанционно"
        date={DateToString(dates.smmMs, true)}
        leftText={
          <span>
            Внесите аванс 2000 рублей
            <br />
            Получите доступ к демо лекциям
            <br />
            Начинайте учится с группой
          </span>
        }
        rightText={
          // false
          <div>
            <p
              style={{
                fontSize: "1em",
                textAlign: "center",
                lineHeight: "1.4em",
                fontWeight: 400,
                color: "rgb(100,100,100)",
                paddingTop: "2em",
                paddingBottom: "1.5em"
              }}
            >
              После бронирования места в группе Вы получаете доступ к
              демо&nbsp;лекциям, мы оформляем зачисление на&nbsp;курс.
            </p>
            <p
              style={{
                fontSize: "1em",
                textAlign: "center",
                lineHeight: "1.4em",
                fontWeight: 400,
                color: "rgb(100,100,100)"
              }}
            >
              В случае отказа от обучения аванс возвращается.
            </p>
          </div>
        }
        styeleRightBox={{ paddingTop: 10, paddingBottom: 10 }}
        link="https://billing.styleschool.ru/event/FgsGzRdPJm8nT6Qiw"
        height={"12em"}
        styleHead={styles.h2}
      />
    </div>
  );
};

export default DatesExport;
