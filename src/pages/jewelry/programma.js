import React from "react";
// import List from "../../components/list";
import Paragraph from "../../components/p-array";

export default function Contents() {
  const content = [
    {
      title: "Встреча 1, лекция.",
      text: (
        <Paragraph
          content={[
            "Стилевой потенциал в ювелирных украшениях и бижутерии. Большие исторические стили в украшениях. Костюмные стили и украшения. Стилевые миксы (как сочетать между собой по стилю одежду, аксессуары и украшения)"
          ]}
        />
      )
    },
    {
      title: "Встреча 2, лекция/ практика.",
      text: (
        <Paragraph
          content={[
            "Украшения и визуальная коррекция. Цвет, характер линий и форм в украшениях, пропорциональное соотношение их с лицом и фигурой. Диагностика. Оптическая  коррекция и сообразность различных украшений типу внешности."
          ]}
        />
      )
    },
    {
      title: "Встреча 3, практика.",
      text: (
        <Paragraph
          content={[
            "Кастомайзинг украшений. «Ревизия шкатулки». Тип внешности и имидж с учетом трендов. Техническое решение, материалы, инструменты. Процесс переделки украшения."
          ]}
        />
      )
    }
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2
        style={{
          fontSize: "1.6em",
          textAlign: "center",
          color: "rgb(100,100,100)"
        }}
      >
        Программа курса
      </h2>
      {content.map((el, k) => (
        <div>
          <p
            style={{
              fontSize: "1em",
              fontWeight: 700,
              textAlign: "left",
              color: "rgb(100,100,100)"
            }}
          >
            {el.title}
          </p>
          {el.text ? el.text : null}
        </div>
      ))}
    </div>
  );
}
