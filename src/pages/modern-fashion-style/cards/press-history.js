import React from "react";
import Card from "../card";
import List from "../../../components/list";

export default function CardModern(props) {
  return (
    <Card
      head="История моды"
      title="Модная пресса в России"
      teacher="Жилова Эмилия"
      descript="on-line"
      online
      date="24 июля"
      time="10:00"
      duration=""
      image="/img/modern-fashion-style/press-history.jpg"
      text={
        <List
          arr={[
            "Особенности формирования традиций в русском национальном костюме (обзорно)",
            "Зарождение модной индустрии в России",
            "Первый русский журнал о моде",
            "Развитие модных изданий в 19 веке",
            "Судьба журналов о моде в начале 20го века"
          ]}
        />
      }
      q
      part
      color="rose"
      id="deiFHeMApd5tWg6wf"
      setBillingId={props.setBillingId}
    />
  );
}
