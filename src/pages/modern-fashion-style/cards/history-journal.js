import React from "react";
import Card from "../card";
import List from "../../../components/list";

export default function CardModern(props) {
  return (
    <Card
      head="История моды"
      title="История возникновения и развития журналов о моде"
      teacher="Эмилия Жилова"
      descript={<span>on-line</span>}
      online
      date="21 июня"
      time={<span>10:00</span>}
      duration=""
      image="/img/modern-fashion-style/history-journal.jpeg"
      text={
        <div>
          На лекции затроним следующие темы:
          <List
            arr={[
              "Предыстория возникновения европейских модных журналов (символизм в живописных полотнах)",
              "Причины возникновения первого журнала о моде",
              "Хроника возникновения европейских модных журналов",
              "Переход от гравюр к фотографии",
              "Культовые глянцевые издания"
            ]}
          />
        </div>
      }
      q
      // free
      part
      // partPrice="600"
      // price="5900"
      color="rose"
      id="YGkxSi6gwWadowytb"
      setBillingId={props.setBillingId}
    />
  );
}
