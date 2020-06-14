import React from "react";
import Card from "../card";

export default function Wardrobe(props) {
  return (
    <Card
      head="Солнце. Мода. Любовь"
      title="Маленькие секреты большого гардероба"
      teacher="Инесса Трубецкова"
      descript={<span>Очно,</span>}
      online
      date="01 и 02 июня"
      time="10:00-16:30"
      duration={false}
      image="/img/modern-fashion-style/wardrobe.jpg"
      text={
        <span>
          «Забитый гардероб, но нечего надеть» &mdash; такое состояние знакомо,
          пожалуй, каждому человеку. Как спланировать гардероб и гардеробную
          капсулу так, чтобы всегда было, что надеть и вещи сочетались друг с
          другом? Юбки, брюки, блузы &mdash; что с чем, куда и зачем. Как
          подбирать одежду, аксессуары и обувь в зависимости от стиля жизни,
          бюджета, разбираться в тонкостях сезонного гардероба. Правила создания
          гардеробного «домика» &mdash; от фундамента до модных хитов.
        </span>
      }
      q
      part
      partPrice="6 900"
      color="rose"
      id=""
      setBillingId={props.setBillingId}
    />
  );
}
