import React from "react";
import Page from "./page";
import { Link } from "react-router-dom";
import List from "../../components/list";
import styles from "../../components/styles-for-types";
// import ScrollableAnchor from "react-scrollable-anchor";

const Corporate = function(props) {
  return (
    <Page
      title={"Сетевые образовательные программы"}
      faqultet={"Сетевые образовательные программы"}
      head={{
        text: "Сетевые образовательные программы",
        image: "linear-gradient(rgba(255,0,0,.3), rgba(0,255,0,.3))",
        descript:
          "Сетевая форма реализации образовательных  программ дистанционного обучения в области моды, дизайна, рекламы, искусства",
        colorText: "rgb(80,80,80)",
        colorBlock: "rgba(0,0,0,0.6)"
      }}
      info={[
        {
          image: "img/corporate/butique.jpg",
          text: "Fashion пространства"
        },
        {
          image: "img/corporate/art-space.jpg",
          text: "Art пространства"
        },
        {
          image: "img/corporate/auditory.jpg",
          text: "Лектории"
        },
        {
          image: "img/corporate/baza.jpg",
          text: "Выездные мероприятия"
        }
      ]}
      infoSize={3}
      // short={[ ]}
      orientations={[
        "Предоставление готовых дистанционных модулей",
        <Link to="/lms">Создание СДО для ВУЗов на базе открытого ПО</Link>,
        "Продвижение дистанционных модулей ВУЗов"
      ]}
      orientationSize={4}
      descript={{
        text: (
          <div>
            <p style={styles.pPaddingBottom}>
              Данный проект осуществляется в рамках концепции взаимодействия
              ВШСДиТ и государственных Вузов и связан с реализацией программ
              профессиональной подготовки и повышения квалификации.
            </p>
            <p style={styles.pPaddingBottom}>
              ВШСДиТ выступает в качестве организации-партнера и для реализации
              концепции взаимодействия в рамках образовательных программ
              предлагает модель «индивидуального выбора»: обучающийся имеет
              возможность сделать самостоятельный выбор готовой дисциплины
              (модуля) в он-лайн формате как опциальной в рамках основной
              программы бакалавриата или магистрата базового Вуза или как
              необходимой либо опциальной в рамках программ дополнительного
              профессионального обучения.
            </p>
            {/* <List
              arr={[
                "включение готовых дисциплин (модулей) в программы партнеров",
                "модель индивидуального выбора, где обучающимся предоставляется право самостоятельно выбрать необходимый модуль в он-лайн формате"
              ]}
              style={styles.pPaddingBottom}
            /> */}
            <p style={styles.pPaddingBottom}>
              При необходимости, ВШСДТ оказывает содействие в создании и
              развитии полноценной системы дистанционного обучения на базе ВУЗа.
            </p>
          </div>
        ),
        image: false
      }}
      programmaName="Дистанционные модули ВШСДТ"
      programma={[
        <List
          arr={[
            "Теория моды",
            "Имидж-консалтинг",
            "Дизайн интерьеров",
            "Современное искусство",
            "Реклама и PR  в сфере моды и дизайна"
          ]}
          style={styles.p}
        />,
        "Студенты и самый широкий круг обучающихся имеют возможность приобретать уникальные профессиональные знания на основе разных подходов и опыта разных преподавателей, востребованные в быстроменяющихся и быстроразвивающихся современных сферах деятельности.",
        "Одним из весомых преимуществ концепции взаимодействия ВШСДиТ и Вузов является интеграция дистанционных технологий в образовательный процесс, что позволяет Вузам преодолевать географические ограничения, охватывать широкую аудиторию слушателей, осуществлять непрерывное образование, создавать принципиально новый образовательный продукт, актуальный, как для рынка, так и для конкретного обучающегося.",
        "Не у всех Вузов есть достаточные ресурсы для полноценного он-лайн обучения и ВШСДиТ, у которого есть эффективная многолетняя практика и соответствующие специалисты, предлагает хорошие возможности для внедрения и поддержки СДО."
      ]}
      partners={[
        {
          image: "/img/network-educational-programs/rgsu.jpg",
          alt: "РГСУ"
        },
        {
          image: "/img/network-educational-programs/rgutis.jpg",
          alt: "РГУТИС"
        },
        {
          image: "/img/network-educational-programs/mhpi.jpg",
          alt: "МХПИ"
        }
      ]}
      headPartners="Партнеры"
      formaTitle="Узнать больше о партнерской программе"
    />
  );
};

export default Corporate;
