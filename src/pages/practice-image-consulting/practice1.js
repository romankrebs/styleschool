import React from "react";
import Practice from "./practice";

export default function Practice1() {
  return (
    <Practice
      head="Практика #1"
      anchor="practice1"
      start="2 декабря 2019"
      price="25 000 ₽"
      time="5 дней, с 10:00 до 18:00 по мск времени, очно."
      text1="Практика имидж-консультирования для слушателей, прошедших не менее 2-х месяцев обучения"
      text2={
        <React.Fragment>
          <p>
            Разбираем актуальные вопросы по применению методик создания
            индивидуального стиля и работы с клиентами на шопинге с
            использованием базовых и широко применяемых теорий. Говорим о
            клиентах, изучаем модные тенденции, ассортимент, закрепляем навыки
            планирования индивидуального гардероба на «все случаи жизни»,
            практикуемся в выборе и реализации стилевых решений на основе
            базовых методик: колоритов, коррекции фигуры, стилей в одежде и
            принципов их сочетания.
          </p>
          <p>
            На основе изученного материала и самостоятельной творческой работы
            отрабатываем и закрепляем навыки персонального имидж-консалтинга и
            шопинг-сопровождения на практике.
          </p>
        </React.Fragment>
      }
      teachers={[
        {
          image: "/img/practice-image-consulting/teacher_fomina.jpg",
          name: (
            <span>
              Татьяна
              <br />
              Фомина
            </span>
          ),
          link: "/tatiana_fomina"
        },
        {
          image: "/img/practice-image-consulting/marina-bonetskaya.jpg",
          name: (
            <span>
              Марина
              <br />
              Бонецкая
            </span>
          ),
          link: "/marina_bonetskaya"
        },
        {
          image: "/img/practice-image-consulting/liana-bahova.jpg",
          name: (
            <span>
              Лиана
              <br />
              Бахова
            </span>
          ),
          link: "/liana_bahova"
        }
      ]}
    />
  );
}
