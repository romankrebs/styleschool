import React from "react";
import Card from "../card";

export default function Photo(props) {
  return (
    <Card
      head="Фотосессия"
      title="Летний fashion. Особенности организации и проведения фотосессий на выезде"
      teacher="Эмилия Жилова"
      descript={<span>online,</span>}
      online
      date="29 мая"
      time={<span>10:00</span>}
      duration={false}
      image="/img/modern-fashion-style/fashion_foto.jpg"
      imageHeight
      text={
        <span>
          На вебинаре рассмотрим следующие вопросы.
          <br />
          Как планировать съемку на улице?
          <br />В чем везти вещи?
          <br />
          Как и где переодеваться моделям?
          <br />
          Техника безопасности для одежды на съемках.
          <br />
          Особенности освещения в разное время суток
          <br />
          Примеры актуальных глянцевых съемок.
        </span>
      }
      q
      part
      view
      // partPrice="600"
      color="rose"
      id="gTD8W2RG9Dvdr42Aw"
      setBillingId={props.setBillingId}
    />
  );
}
