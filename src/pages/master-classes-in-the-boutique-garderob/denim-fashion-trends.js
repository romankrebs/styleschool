import React from "react";
import Page from "./index";
import Crisis from "../../components/banner-crisis-management-fashion-butik";
import Premium from "../../components/banner-premium-brands";
import Imagemaker from "../../components/banner-imagemaker";

const Denim = props => {
  return (
    <Page
      title="Модные тенденции в дениме"
      short={
        <span>
          <span style={{ color: "rgb(123,143,87)" }}>Мастер-класс:</span> 16
          октября | Москва | Бутик «Garderob»
        </span>
      }
      content="В джинсовых брендах тоже есть сезонные модные тенденции, и Вы научитесь их видеть и презентовать своим клиентам. На занятие Вас ждет знакомство с джинсовыми брендами премиального сегмента. Вы узнаете секреты идеальной посадки на любую фигуру. А ещё Вы должны будете справится с выбором идеальной модели для своего клиента."
      banners={{
        banner1: <Crisis />,
        banner2: <Premium />,
        banner3: <Imagemaker />
      }}
      link="https://billing.styleschool.ru/event/ngJY2sdG7zWiRXTQy"
    />
  );
};

export default Denim;
