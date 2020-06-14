import React from "react";
import Page from "./index";
import Crisis from "../../components/banner-crisis-management-fashion-butik";
import Season from "../../components/banner-current-season-trends";
import Imagemaker from "../../components/banner-imagemaker";

const Brends = props => {
  return (
    <Page
      title="Знакомство с брендами премиального сегмента с разбором по стилистике"
      short={
        <span>
          <span style={{ color: "rgb(123,143,87)" }}>Мастер-класс:</span> 23
          октября | Москва | Бутик «Garderob»
        </span>
      }
      content="Вы познакомитесь с самыми известными и интересными брендами премиального сегмента. Определите их стили, узнаете о возможностях их сочетаний в комплекты. Научитесь презентовать заинтересовавшие вас бренды."
      banners={{
        banner1: <Crisis />,
        banner2: <Season />,
        banner3: <Imagemaker />
      }}
      link="https://billing.styleschool.ru/event/csA8DGCruuGTinyuw"
    />
  );
};

export default Brends;
