import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Архитектура и дизайн"
      title="Ранний функционализм: Германский Веркбунд нач. ХХ в."
      teacher="Галина Варакина"
      descript={<span>Онлайн-лекция</span>}
      onlineText="Онлайн-лекция"
      date="4 апреля"
      time="20:00"
      duration="30 минут"
      image="/img/modern-fashion-style/poster.jpg"
      text={
        <span>
          На вебинаре мы окунемся в атмосферу европейской культуры начала ХХ
          века, время, когда модерн постепенно отступает перед натиском
          промышленной революции и функционализма. Одним из лидеров в мире
          нарождавшегося дизайна была Германия. Знакомство с германским
          Веркбундом – это возможность увидеть истоки современного дизайна и
          современного стиля.
        </span>
      }
      part
      // partPrice="600"
      crown
      view
      id="eSh2p5mNPxjTy2Sor"
      setBillingId={props.setBillingId}
    />
  );
}
