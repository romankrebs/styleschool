import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Искусство"
      title="Античный канон красоты: греческая и римская версии"
      teacher="Галина Варакина"
      descript={<span>Онлайн-лекция</span>}
      onlineText="Онлайн-лекция"
      date="4 апреля"
      time={<span>20:30</span>}
      duration="30 минут"
      image="/img/modern-fashion-style/antique.jpg"
      text={
        <span>
          Античность до сих пор является символом высокого стиля, выступая
          основой наиболее знаковых разработок современных дизайнеров, как в
          предметных формах, так и в модной индустрии. Знание канонов античной
          классики – насущное требование архитектуры, искусства и дизайна. На
          вебинаре мы на примерах разберем наиболее важные принципы античной
          скульптуры и телесности в целом, познакомимся с наиболее яркими
          именами и значимыми объектами художественного наследия.
        </span>
      }
      part
      // partPrice="600"
      crown
      view
      id="MkudcNd55MtCMMdbN"
      setBillingId={props.setBillingId}
    />
  );
}
