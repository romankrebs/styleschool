import React from "react";
import Page from "./index";
import Crisis from "../../components/banner-crisis-management-fashion-butik";
import Capsule from "../../components/banner-putting-the-capsule-on-vacation";
import Imagemaker from "../../components/banner-imagemaker";

const Trends = props => {
  return (
    <Page
      title="Тренды текущего сезона, как их считывать в бутике, шоуруме"
      short={
        <span>
          <span style={{ color: "rgb(123,143,87)" }}>Мастер-класс:</span> 2
          октября | Москва | Бутик «Garderob»
        </span>
      }
      content="Вы узнаете, что такое тренды и их основные критерии. Во время занятия проведёте анализ трендов текущего сезона на базе коллекций премиального сегмента(более 40 брендов), представленных в бутике Garderob. После занятия вы будете владеть алгоритмом определения модных тенденций, опираясь на структурированные  знания основных критериев трендов."
      banners={{
        banner1: <Crisis />,
        banner2: <Capsule />,
        banner3: <Imagemaker />
      }}
      link="https://billing.styleschool.ru/event/6C5opJgb9bm8dXYF2"
    />
  );
};

export default Trends;
