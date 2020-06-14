import React from "react";
import ProffEducation from "../../components/proff-education";

export default function ProffEducationComponent(props) {
  let content = {
    head: "Концепция: академическое образование + практика",
    text: (
      <div>
        <p
          style={{
            margin: 0,
            padding: 0,
            fontWidth: 400,
            fontFamily: props.font.text || "inherit",
            fontSize: props.font.size || "1em",
            color: "rgb(100,100,100)"
          }}
        >
          Комплексная программа обучения в области имидж-технологий и
          стилистики. Основа &ndash; отличная теоретическая подготовка в
          сочетании с формированием творческого мышления и регулярной практикой
          создания модных и стильных образов. Результат: системные знания, новые
          возможности профессионального развития, технологии работы с клиентами
          и модными трендами.
        </p>
        <p
          style={{
            fontWidth: 400,
            fontSize: props.font.size || "1em",
            fontFamily: props.font.text || "inherit",
            color: "rgb(100,100,100)"
          }}
        >
          Это важно!
        </p>
      </div>
    ),
    partners: {
      image: "/img/RGSU.png",
      name: (
        <span>
          Стратегический партнер ВШС &ndash; Российский государственный
          социальный университет.
        </span>
      )
    },
    message: (
      <span>
        Выпускники курса, успешно сдавшие экзамены, получают документ
        ВШС&nbsp;+&nbsp; Диплом университета о профессиональной переподготовке с
        правом деятельности в изученной области
      </span>
    ),
    diplom: "/img/diplom.jpg"
  };

  return (
    <div>
      <ProffEducation
        head={content.head}
        styleHead={{
          fontFamily: props.font.title || "Lora",
          color: "rgb(100,0,0)"
        }}
        text={content.text}
        partners={{
          image: content.partners.image,
          name: content.partners.name
        }}
        message={content.message}
        diplom={content.diplom}
        link="diplom"
      />
    </div>
  );
}
