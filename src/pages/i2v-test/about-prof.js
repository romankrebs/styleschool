import React from "react";

import AboutProf from "../../components/about-prof.js";

export default function AboutProfComponent(props) {
  const content = {
    a: {
      head: "Цель программы:",
      text:
        "Обучение важнейшему языку коммуникаций в современном мире, в мире моды и стиля жизни.Развитие природного чутья, творческого мышления и знаний современных технологий имиджа и маркетинга одновременно."
    },
    b: {
      head: "Профессиональный инструментарий:",
      text:
        "Путь от выбора идеи до реализации и продвижения, изучение источников и современных приемов для создания образа, реализация идеи на практике с учетом задач и целей клиента и знаний особенности модного рынка, продвижение идеи и услуг с использованием цифровых каналов и инструментов."
    },
    c: {
      head: "Сфера применения:",
      text:
        "Творческая и профессиональная реализация в области имидж-консультирования, модной индустрии и fashion-проектах, корпоративной культуры, рекламных и PR-технологий. Работа на fashion-съемках, в модной журналистике, сотрудничество с дизайнерскими брендами."
    }
  };
  return (
    <div>
      <h2
        style={{
          fontFamily: "Lora",
          fontSize: "1.8em",
          color: "rgb(100,0,0)",
          textAlign: "center",
          fontWeight: 500,
          margin: 8,
          padding: "12px 0"
        }}
      >
        Программа &laquo;Имидж-консалтинг и fashion-styling&raquo;
      </h2>
      <p
        style={{
          // fontFamily: "Roboto",
          fontSize: "1em",
          color: "rgb(80,80,80)",
          textAlign: "center",
          fontWeight: 400,
          padding: 4,
          margin: 0
        }}
      >
        Профессиональная подготовка универсальных специалистов для бизнеса и
        карьеры в индустрии моды
      </p>
      <AboutProf
        a={{
          head: content.a.head,
          text: content.a.text
        }}
        b={{
          head: content.b.head,
          text: content.b.text
        }}
        c={{
          head: content.c.head,
          text: content.c.text
        }}
      />
    </div>
  );
}
