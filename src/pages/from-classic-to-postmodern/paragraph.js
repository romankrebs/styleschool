import React from "react";

import Paragraph from "../../components/paragraph";
import List from "../../components/list";
import Slider from "../../components/slider-images";

export default function Component() {
  const cont = [
    {
      src: "/img/from-classic-to-postmodern/slide06.jpg"
    },
    {
      src: "/img/from-classic-to-postmodern/slide07.jpg"
    },
    {
      src: "/img/from-classic-to-postmodern/slide08.jpg"
    },
    {
      src: "/img/from-classic-to-postmodern/slide09.jpg"
    },
    {
      src: "/img/from-classic-to-postmodern/slide10.jpg"
    }
  ];
  const content = {
    left: (
      <div>
        <p
          style={{
            textAlign: "left",
            paddingTop: 0,
            marginTop: 0,
            lineHeight: "1.5em"
          }}
        >
          Курс предназначен для тех, кого интересуют процессы и суть современных
          художественных практик в их исторической проекции, и кто хотел бы
          получить основу для творческого развития.
        </p>
        <p style={{ textAlign: "left", lineHeight: "1.5em" }}>
          Особое внимание будет уделено арт-процессу 60-80-х годов XX века, а
          заключительная часть курса будет посвящена наступающей эпохе
          метамодерна, как предсказываемому философами и художниками будущего
          искусства.
        </p>
        <List
          arr={[
            <a href="#dates">Ближайшие даты</a>,
            <a href="#programma">Программа курса</a>,
            <a href="#price">Информация о стоимости</a>
          ]}
          num="none"
          style={{ lineHeight: "1.5em" }}
        />
      </div>
    ),
    right: <Slider content={cont} play={3000} />
  };
  return <Paragraph content={content} />;
}
