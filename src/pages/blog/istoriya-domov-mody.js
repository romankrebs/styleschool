import React from "react";

import Paragraph from "../../components/p-array";
import Blog from "./template";

export default function Myslitel() {
  return (
    <Blog
      title="ВШС: Наталья Горских: Ермилова Д.Ю. История домов моды."
      keywords="ВШС: Наталья Горских: Ермилова Д.Ю. История домов моды."
      head="Ермилова Д.Ю. История домов моды."
      author="Наталья Горских"
      link="/natalya_gorskyh"
      image="/img/blog/book-ermilova.jpg"
      content={
        <Paragraph
          content={[
            <span>
              Книга посвящена истории моды конца XIX—начала XX в. как
              многообразия стилей Домов высокой моды и фирм, выпускающих
              коллекции прет-а-порте. Интерес представляет анализ анализ
              творческих концепций крупнейших модельеров (Ч.-Ф.&nbsp;Ворта,
              П.&nbsp;Пуаре, К.&nbsp;Шанель, М.&nbsp;Вионне,
              Э.&nbsp;Скьяпарелли, К.&nbsp;Диора, И.&nbsp;Сен-Лорана,
              Дж.&nbsp;Армани, И.&nbsp;Мияке, Ж.-П.&nbsp;Готье и др.), где
              отразились основные черты эпохи, дизайн и современное искусство,
              новые технологии.
            </span>
          ]}
        />
      }
    />
  );
}
