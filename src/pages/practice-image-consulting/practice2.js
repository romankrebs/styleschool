import React from "react";
import Practice from "./practice";

export default function Practice1() {
  return (
    <Practice
      head="Практика #2"
      anchor="practice2"
      start="16 марта 2020"
      price="25 000 ₽"
      time="5 дней, с 10:00 до 18:00 по мск времени, очно."
      text1="Практика имидж-консультирования для выпускников и слушателей, прошедших не менее 6-ти месяцев обучения"
      text2={
        <React.Fragment>
          <p>
            Разбираем актуальные вопросы по применению методик создания
            индивидуального стиля и консультирования клиентов с использованием
            всех изученных теорий: колоритов, коррекции фигуры, стилей в одежде,
            стилевых направлений в костюме и внешности, композиционных приемов
            создания выразительности, теории психотипов и поведенческих
            установок.
          </p>
          <p>
            Говорим о клиентах, изучаем модные тенденции, ассортимент,
            практикуемся в выборе и реализации стилевых решений на основе
            базовых методик и методик создания стиля с учетом художественных
            решений и с применением искусствоведческих знаний.
          </p>
          <p>
            На основе изученного материала и самостоятельной творческой работы
            отрабатываем и закрепляем навыки персонального имидж-консалтинга и
            шопинг- сопровождения на практике.
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
          link: "tatiana_fomina"
        },
        {
          image: "/img/practice-image-consulting/teacher_kononets.jpg",
          name: (
            <span>
              Светлана
              <br />
              Кононец
            </span>
          ),
          link: "/svetlana_kononets"
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
        },
        {
          image: "/img/practice-image-consulting/ruslan-migranov.jpg",
          name: (
            <span>
              Руслан
              <br />
              Мигранов
            </span>
          ),
          link: "/ruslan_migranov"
        }
      ]}
    />
  );
}
