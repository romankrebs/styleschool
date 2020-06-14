import React from "react";
import Dates from "../../components/dates-credit-reservation";
// import { style } from "./styles";

const DataAndCredit = function(props) {
  return (
    <Dates
      link="https://billing.styleschool.ru/event/PsucySCyK9CBs8TqZ"
      price="50000"
      avans="900"
      nameCourse="Руководство по продвижению модного бренда на глобальном рынке, повышение квалификации (рассрочка 10 мес по 5000 руб)"
      data="25 января 2020 г."
      textRightBlock={
        <span>
          Стоимость курса: 50
          <sup>000</sup> руб.
          <br />
          Выпускникам ВШСДТ и студентам предоставляется супер&nbsp;скидка
          <br />
          После бронирования места в группе Вы получаете доступ к&nbsp;демо
          лекциям, мы оформляем зачисление на курс
          <br />В случае отказа от обучения сумма брони возвращается.
        </span>
      }
      formsEducation={"Дистанционно | Очно"}
      smallHead
    />
  );
};

export default DataAndCredit;
