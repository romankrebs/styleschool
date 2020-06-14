import React from "react";
import Page from "./index";
import Crisis from "../../components/banner-crisis-management-fashion-butik";
import Denim from "../../components/banner-denim-fashion-trends";
import Imagemaker from "../../components/banner-imagemaker";

const Trends = props => {
  return (
    <Page
      title="Собираем капсулу в отпуск"
      short={
        <span>
          <span style={{ color: "rgb(123,143,87)" }}>Мастер-класс:</span> 9
          октября | Москва | Бутик «Garderob»
        </span>
      }
      content="Вы познакомитесь с понятием капсула в  fashion коллекциях, а также с различными вариантами капсул в гардеробе. Сформируете представление о трёх вариантах капсул для отпуска. Соберете на практике один из капсюльных вариантов для отпуска для своего Клиента(участник из вашей группы) на базе коллекций представленных в бутике Garderob."
      banners={{
        banner1: <Crisis />,
        banner2: <Denim />,
        banner3: <Imagemaker />
      }}
      link="https://billing.styleschool.ru/event/h4TomqAZmcbu4rW6h"
    />
  );
};

export default Trends;
