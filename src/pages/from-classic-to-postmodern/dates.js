import React from "react";
import Dates from "../../components/date-and-price";

export const datas = {
  online: ["4 декабря 2019"]
};

const DatesExport = props => {
  return (
    <div>
      <Dates
        head="Ближайший набор"
        title="Дистанционно"
        date={
          <span>
            {/* вторник, четверг, суббота
            <br /> */}
            {datas.online[0]}
          </span>
        }
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
          <div>
            <p
              style={{
                fontSize: "1.2em",
                textAlign: "center",
                lineHeight: "1.4em",
                fontWeight: 400,
                color: "rgb(100,100,100)"
              }}
            >
              После бронирования места в группе Вы получаете доступ к
              демо&nbsp;лекциям, мы оформляем зачисление на&nbsp;курс.
            </p>
            <p
              style={{
                fontSize: "1.2em",
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
      />
    </div>
  );
};

export default DatesExport;
