import React from "react";
import Dates from "../../components/date-and-price";
import Forma from "../../components/credit-form";
import { styles } from "./styles";

const DatesExport = props => {
  return (
    <div>
      <Dates
        head="Ближайший набор"
        title="Дистанционно"
        date={<span>15 января</span>}
        leftText={
          <span>
            Забронируйте место, внесите 900 руб.
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
                fontWeight: 500,
                color: "rgb(100,100,100)"
              }}
            >
              Учиться от
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
              руб. в месяц в рассрочку
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
              В случае отказа от обучения сумма брони возвращается.
            </p>
            <Forma
              sum="50000.00"
              name="Fashion-журналистика в цифровую эпоху, курс повышения квалификации (онлайн)"
              white
              test={false}
              textButton="Оформить рассрочку можно здесь"
            />
          </div>
        }
        styeleRightBox={{ paddingTop: 10, paddingBottom: 10 }}
        link="https://billing.styleschool.ru/event/9XnNK2yQth6E6Hpnz"
        styleHead={styles.h2}
        styleSubtitle={styles.h3}
      />
    </div>
  );
};

export default DatesExport;
