import React from "react";
import Dates from "../../components/date-and-price";

const DatesExport = props => {
  return (
    <div>
      <Dates
        head="Ближайший набор"
        title="Дистанционно"
        date={
          <span>
            {/* понедельник, среда, пятница
            <br />4 октября */}
            9, 10, 11 декабря
          </span>
        }
        leftText={
          <span>
            Внесите аванс 990 рублей
            <br />
            Начинайте учится с группой
            <br />
            Время занятий 18:30 - 21:30
          </span>
        }
        rightText={
          <div>
            <p
              style={{
                fontSize: "1.2em",
                textAlign: "center",
                lineHeight: "1.4em",
                fontWeight: 500,
                color: "rgb(100,100,100)"
              }}
            >
              <span
                style={{
                  // fontSize: "1.4em",
                  fontWeight: 600,
                  color: "rgb(80,80,80)"
                }}
              >
                {" "}
                5<sup style={{ fontSize: "0.8em" }}>000</sup>{" "}
              </span>
              руб.
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
        link="/"
      />
    </div>
  );
};

export default DatesExport;
